import {Injectable} from '@angular/core';
import {AdminApiConfig} from '../../AdminApiConfig';
import {CrudResource} from '../../../../../nestjsx/crud/CrudResource';
import {HttpClient} from '@angular/common/http';
import {ThingTypeAttribute} from '../dto/ThingTypeAttribute';

@Injectable()
export class ThingAttributeResource extends CrudResource<ThingTypeAttribute> {
    constructor(httpClient: HttpClient) {
        super(AdminApiConfig.API_ROOT_URL + '/thing_attribute', httpClient);
    }
}
