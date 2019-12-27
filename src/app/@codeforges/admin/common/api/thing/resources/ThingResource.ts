import {Injectable} from '@angular/core';
import {CrudResource} from '../../../../../nestjsx/crud/CrudResource';
import {HttpClient} from '@angular/common/http';
import {Thing} from '../dto/Thing';
import {CoreApiConfig} from '../../../../../core/api/CFCoreApiConfig';

@Injectable()
export class ThingResource extends CrudResource<Thing> {
    constructor(httpClient: HttpClient) {
        super(CoreApiConfig.API_ROOT_URL + '/thing', httpClient);
    }
}
