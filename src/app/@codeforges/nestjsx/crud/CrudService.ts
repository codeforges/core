import {CrudAware} from './CrudAware';
import {CrudQueryParams} from './CrudQueryParams';
import {Observable} from 'rxjs';
import {CrudResource} from './CrudResource';
import {CrudPageable} from '../../core/material/tables/dataModels/Pageable';

export class CrudService<T, R extends CrudResource<T>> implements CrudAware<T> {

    constructor(protected resource: R) {
    }

    create<K>(payload: K, query?: CrudQueryParams): Observable<T> {
        return this.resource.create(payload, query);
    }

    createMany<K>(payload: K[], query?: CrudQueryParams): Observable<T[]> {
        return this.resource.createMany(payload, query);
    }

    delete(id: string | number, query?: CrudQueryParams): Observable<void> {
        return this.resource.delete(id, query);
    }

    get(id: string | number, query?: CrudQueryParams): Observable<T> {
        return this.resource.get(id, query);
    }

    getMany(query?: CrudQueryParams): Observable<CrudPageable<T>> {
        return this.resource.getMany(query);
    }

    update<K>(id: string | number, payload: K, query?: CrudQueryParams): Observable<T> {
        return this.resource.update(id, payload, query);
    }
}
