import {Injectable} from '@angular/core';
import {CrudAware} from '../../../../../nestjsx/crud/CrudAware';
import {Observable} from 'rxjs';
import {CrudQueryParams} from '../../../../../nestjsx/crud/CrudQueryParams';
import {ThingAttribute} from '../dto/ThingAttribute';
import {ThingAttributeResource} from '../resources/ThingAttributeResource';

@Injectable()
export class ThingAttributeService implements CrudAware<ThingAttribute> {

    constructor(private resource: ThingAttributeResource) {
    }

    create<K>(payload: K, query?: CrudQueryParams): Observable<ThingAttribute> {
        return this.resource.create(payload, query);
    }

    createMany<K>(payload: K[], query?: CrudQueryParams): Observable<ThingAttribute[]> {
        return this.resource.createMany(payload, query);
    }

    delete(id: string | number, query?: CrudQueryParams): Observable<void> {
        return this.resource.delete(id, query);
    }

    get(id: string | number, query?: CrudQueryParams): Observable<ThingAttribute> {
        return this.resource.get(id, query);
    }

    getMany(query?: CrudQueryParams): Observable<ThingAttribute[]> {
        return this.resource.getMany(query);
    }

    update<K>(payload: K, query?: CrudQueryParams): Observable<ThingAttribute> {
        return this.resource.update(payload, query);
    }
}
