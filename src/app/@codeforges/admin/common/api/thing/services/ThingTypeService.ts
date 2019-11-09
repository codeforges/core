import {Injectable} from '@angular/core';
import {CrudAware} from '../../../../../nestjsx/crud/CrudAware';
import {CrudQueryParams} from '../../../../../nestjsx/crud/CrudQueryParams';
import {Observable} from 'rxjs';
import {ThingType} from '../dto/ThingType';
import {ThingTypeResource} from '../resources/ThingTypeResource';
import {ThingTypeAttribute} from '../dto/ThingTypeAttribute';
import {map} from 'rxjs/operators';
import * as _ from 'lodash';

@Injectable()
export class ThingTypeService implements CrudAware<ThingType> {

    constructor(private resource: ThingTypeResource) {
    }

    create<K>(payload: K, query?: CrudQueryParams): Observable<ThingType> {
        return this.resource.create(payload, query);
    }

    createMany<K>(payload: K[], query?: CrudQueryParams): Observable<ThingType[]> {
        return this.resource.createMany(payload, query);
    }

    delete(id: string | number, query?: CrudQueryParams): Observable<void> {
        return this.resource.delete(id, query);
    }

    get(id: string | number, query?: CrudQueryParams): Observable<ThingType> {
        return this.resource.get(id, query);
    }

    getMany(query?: CrudQueryParams): Observable<ThingType[]> {
        return this.resource.getMany(query);
    }

    update<K>(id: string | number, payload: K, query?: CrudQueryParams): Observable<ThingType> {
        return this.resource.update(id, payload, query);
    }

    public getAttributesForType(typeName: string): Observable<ThingTypeAttribute[]> {
        return this.getMany({
            filters: [
                {field: 'name', operator: 'eq', value: typeName},
            ],
            select: ['attributes']
        })
            .pipe(map((res: ThingType[]) => _.head(res).attributes));
    }

    public getType(typeName: string): Observable<ThingType> {
        return this.getMany({
            filters: [
                {field: 'name', operator: 'eq', value: typeName},
            ],
        })
            .pipe(map((res: ThingType[]) => _.head(res)));
    }
}
