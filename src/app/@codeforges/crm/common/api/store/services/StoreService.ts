import {Injectable} from '@angular/core';
import {Store} from '../dto/Store';
import {CrudService} from '../../../../../nestjsx/crud/CrudService';
import {StoreResource} from '../resources/StoreResource';

@Injectable()
export class StoreService extends CrudService<Store, StoreResource> {
    constructor(resource: StoreResource) {
        super(resource);
    }
}
