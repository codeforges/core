import {Injectable} from '@angular/core';
import {CrudAware} from '../../../../../nestjsx/crud/CrudAware';
import {Thing} from '../dto/Thing';
import {Observable} from 'rxjs';
import {CrudQueryParams} from '../../../../../nestjsx/crud/CrudQueryParams';
import {ThingResource} from '../resources/ThingResource';

@Injectable()
export class ThingService implements CrudAware<Thing> {

    constructor(private resource: ThingResource) {
    }

    create<K>(payload: K, query?: CrudQueryParams): Observable<Thing> {
        return undefined;
    }

    createMany<K>(payload: K[], query?: CrudQueryParams): Observable<Thing[]> {
        return undefined;
    }

    delete(id: string | number, query?: CrudQueryParams): Observable<void> {
        return undefined;
    }

    get(id: string | number, query?: CrudQueryParams): Observable<Thing> {
        return undefined;
    }

    getMany(query?: CrudQueryParams): Observable<Thing[]> {
        return this.resource.getMany(query);
    }

    update<K>(payload: K, query?: CrudQueryParams): Observable<Thing> {
        return undefined;
    }
}
