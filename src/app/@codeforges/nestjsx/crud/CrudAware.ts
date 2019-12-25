import {Observable} from 'rxjs';
import {CrudQueryParams} from './CrudQueryParams';
import {CrudPageable} from '../../core/material/tables/dataModels/Pageable';

export interface CrudAware<T> {

    get(id: string | number, query?: CrudQueryParams): Observable<T>;

    getMany(query?: CrudQueryParams): Observable<CrudPageable<T>>;

    create<K>(payload: K, query?: CrudQueryParams): Observable<T>;

    createMany<K>(payload: K[], query?: CrudQueryParams): Observable<T[]>;

    update<K>(id: string | number, payload: K, query?: CrudQueryParams): Observable<T>;

    delete(id: string | number, query?: CrudQueryParams): Observable<void>;
}
