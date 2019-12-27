import {Injectable} from '@angular/core';
import {CrudResource} from '../../../../../nestjsx/crud/CrudResource';
import {HttpClient} from '@angular/common/http';
import {ThingTypeAttribute} from '../dto/ThingTypeAttribute';
import {CoreApiConfig} from '../../../../../core/api/CFCoreApiConfig';

@Injectable()
export class ThingAttributeResource extends CrudResource<ThingTypeAttribute> {
    constructor(httpClient: HttpClient) {
        super(CoreApiConfig.API_ROOT_URL + '/thing_attribute', httpClient);
    }
}
