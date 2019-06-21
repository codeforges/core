import {Observable} from 'rxjs';
import {CrudQueryParams} from './CrudQueryParams';

export interface CrudAwareResource<T> {

    get(id: string, query?: CrudQueryParams): Observable<T>;

    getMany(query?: CrudQueryParams): Observable<T[]>;

    create<K>(payload: K, query?: CrudQueryParams): Observable<T>;

    createMany<K>(payload: K[], query?: CrudQueryParams): Observable<T[]>;

    update<K>(payload: K, query?: CrudQueryParams): Observable<T>;

    delete(id: string, query?: CrudQueryParams): Observable<void>;
}
