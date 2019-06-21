import {NgModule} from '@angular/core';
import {ThingResource} from './resources/ThingResource';
import {ThingService} from './services/ThingService';

@NgModule({
    providers: [
        ThingResource,
        ThingService
    ],
})
export class ThingApiModule {
}
