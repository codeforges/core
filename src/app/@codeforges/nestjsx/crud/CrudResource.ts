import {CrudAware} from './CrudAware';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {CrudQueryParams} from './CrudQueryParams';
import {CrudQueryStringBuilder} from './CrudQueryStringFactory';

export class CrudResource<T> implements CrudAware<T> {

    constructor(private URL: string,
                private readonly httpClient: HttpClient) {
    }

    create<K>(payload: K, query?: CrudQueryParams): Observable<T> {
        return this.httpClient.post<T>(this.URL + CrudQueryStringBuilder.build(query), payload);
    }

    createMany<K>(payload: K[], query?: CrudQueryParams): Observable<T[]> {
        return this.httpClient.post<T[]>(this.URL + '/bulk' + CrudQueryStringBuilder.build(query), payload);
    }

    delete(id: string | number, query?: CrudQueryParams): Observable<void> {
        return this.httpClient.delete<void>(this.URL + '/' + id + CrudQueryStringBuilder.build(query));
    }

    get(id: string | number, query?: CrudQueryParams): Observable<T> {
        return this.httpClient.get<T>(`${this.URL}/${id}${CrudQueryStringBuilder.build(query)}`);
    }

    getMany(query?: CrudQueryParams): Observable<T[]> {
        return this.httpClient.get<T[]>(`${this.URL}${CrudQueryStringBuilder.build(query)}`);
    }

    update<K>(id: string | number, payload: K, query?: CrudQueryParams): Observable<T> {
        return this.httpClient.patch<T>(this.URL + '/' + id + CrudQueryStringBuilder.build(query), payload);
    }
}
