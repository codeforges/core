import {NgModule} from '@angular/core';
import {StoreResource} from './resources/StoreResource';
import {StoreService} from './services/StoreService';
import {ParcelResource} from '../parcel/resources/ParcelResource';
import {ParcelService} from '../parcel/services/ParcelService';

@NgModule({
    providers: [
        StoreResource,
        StoreService,
        ParcelResource,
        ParcelService
    ],
})
export class StoreApiModule {
}
