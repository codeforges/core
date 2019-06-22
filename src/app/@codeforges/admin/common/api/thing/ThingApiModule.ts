import {NgModule} from '@angular/core';
import {ThingResource} from './resources/ThingResource';
import {ThingService} from './services/ThingService';
import {ThingTypeResource} from './resources/ThingTypeResource';
import {ThingTypeService} from './services/ThingTypeService';

@NgModule({
    providers: [
        ThingResource,
        ThingService,
        ThingTypeResource,
        ThingTypeService
    ],
})
export class ThingApiModule {
}
