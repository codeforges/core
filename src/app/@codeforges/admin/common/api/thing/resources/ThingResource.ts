import {Injectable} from '@angular/core';
import {AdminApiConfig} from '../../AdminApiConfig';
import {CrudResource} from '../../../../../nestjsx/crud/CrudResource';
import {HttpClient} from '@angular/common/http';
import {Thing} from '../dto/Thing';

@Injectable()
export class ThingResource extends CrudResource<Thing> {
    constructor(httpClient: HttpClient) {
        super(AdminApiConfig.API_ROOT_URL + '/thing', httpClient);
    }
}
