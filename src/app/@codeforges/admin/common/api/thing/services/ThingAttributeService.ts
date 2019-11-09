import {Injectable} from '@angular/core';
import {CrudAware} from '../../../../../nestjsx/crud/CrudAware';
import {Observable} from 'rxjs';
import {CrudQueryParams} from '../../../../../nestjsx/crud/CrudQueryParams';
import {ThingTypeAttribute} from '../dto/ThingTypeAttribute';
import {ThingAttributeResource} from '../resources/ThingAttributeResource';

@Injectable()
export class ThingAttributeService implements CrudAware<ThingTypeAttribute> {

    constructor(private resource: ThingAttributeResource) {
    }

    create<K>(payload: K, query?: CrudQueryParams): Observable<ThingTypeAttribute> {
        return this.resource.create(payload, query);
    }

    createMany<K>(payload: K[], query?: CrudQueryParams): Observable<ThingTypeAttribute[]> {
        return this.resource.createMany(payload, query);
    }

    delete(id: string | number, query?: CrudQueryParams): Observable<void> {
        return this.resource.delete(id, query);
    }

    get(id: string | number, query?: CrudQueryParams): Observable<ThingTypeAttribute> {
        return this.resource.get(id, query);
    }

    getMany(query?: CrudQueryParams): Observable<ThingTypeAttribute[]> {
        return this.resource.getMany(query);
    }

    update<K>(id: string | number, payload: K, query?: CrudQueryParams): Observable<ThingTypeAttribute> {
        return this.resource.update(id, payload, query);
    }
}
