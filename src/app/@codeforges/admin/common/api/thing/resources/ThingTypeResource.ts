import {Injectable} from '@angular/core';
import {CrudResource} from '../../../../../nestjsx/crud/CrudResource';
import {HttpClient} from '@angular/common/http';
import {AdminApiConfig} from '../../AdminApiConfig';
import {ThingType} from '../dto/ThingType';

@Injectable()
export class ThingTypeResource extends CrudResource<ThingType> {
    constructor(httpClient: HttpClient) {
        super(AdminApiConfig.API_ROOT_URL + '/thing_type', httpClient);
    }
}
