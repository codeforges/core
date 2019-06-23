import {Injectable} from '@angular/core';
import {AdminApiConfig} from '../../AdminApiConfig';
import {CrudResource} from '../../../../../nestjsx/crud/CrudResource';
import {HttpClient} from '@angular/common/http';
import {ThingAttribute} from '../dto/ThingAttribute';

@Injectable()
export class ThingAttributeResource extends CrudResource<ThingAttribute> {
    constructor(httpClient: HttpClient) {
        super(AdminApiConfig.API_ROOT_URL + '/thing_attribute', httpClient);
    }
}
