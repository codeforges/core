import {Injectable} from '@angular/core';
import {CrudResource} from '../../../../../nestjsx/crud/CrudResource';
import {HttpClient} from '@angular/common/http';
import {CrmApiConfig} from '../../CrmApiConfig';
import {Parcel} from '../dto/Parcel';

@Injectable()
export class ParcelResource extends CrudResource<Parcel> {
    constructor(httpClient: HttpClient) {
        super(CrmApiConfig.API_ROOT_URL + '/parcel', httpClient);
    }
}
