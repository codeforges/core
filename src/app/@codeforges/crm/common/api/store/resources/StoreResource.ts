import {Injectable} from '@angular/core';
import {CrudResource} from '../../../../../nestjsx/crud/CrudResource';
import {HttpClient} from '@angular/common/http';
import {Store} from '../dto/Store';
import {CrmApiConfig} from '../../CrmApiConfig';

@Injectable()
export class StoreResource extends CrudResource<Store> {
    constructor(httpClient: HttpClient) {
        super(CrmApiConfig.API_ROOT_URL + '/store', httpClient);
    }
}
