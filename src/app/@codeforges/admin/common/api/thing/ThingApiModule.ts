import {NgModule} from '@angular/core';
import {ThingResource} from './resources/ThingResource';
import {ThingService} from './services/ThingService';
import {ThingTypeResource} from './resources/ThingTypeResource';
import {ThingTypeService} from './services/ThingTypeService';
import {ThingAttributeResource} from './resources/ThingAttributeResource';
import {ThingAttributeService} from './services/ThingAttributeService';

@NgModule({
    providers: [
        ThingResource,
        ThingService,
        ThingTypeResource,
        ThingTypeService,
        ThingAttributeResource,
        ThingAttributeService
    ],
})
export class ThingApiModule {
}
