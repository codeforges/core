import {Injectable} from '@angular/core';
import {CrudResource} from '../../../../../nestjsx/crud/CrudResource';
import {HttpClient} from '@angular/common/http';
import {ThingType} from '../dto/ThingType';
import {CoreApiConfig} from '../../../../../core/api/CFCoreApiConfig';

@Injectable()
export class ThingTypeResource extends CrudResource<ThingType> {
    constructor(httpClient: HttpClient) {
        super(CoreApiConfig.API_ROOT_URL + '/thing_type', httpClient);
    }
}
