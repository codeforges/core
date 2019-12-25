import {Injectable} from '@angular/core';
import {CrudService} from '../../../../../nestjsx/crud/CrudService';
import {ParcelResource} from '../resources/ParcelResource';
import {Parcel} from '../dto/Parcel';

@Injectable()
export class ParcelService extends CrudService<Parcel, ParcelResource> {
    constructor(resource: ParcelResource) {
        super(resource);
    }
}
