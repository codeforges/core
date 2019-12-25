import {NgModule} from '@angular/core';
import {StoreListComponent} from './list/StoreListComponent';
import {StoreDetailsComponent} from './details/StoreDetailsComponent';
import {ParcelModule} from '../parcels/ParcelModule';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {StoreRouting} from './StoreRouting';
import {CrmApiModule} from '../common/api/CrmApiModule';

const components = [
    StoreListComponent,
    StoreDetailsComponent
];

@NgModule({
    imports: [
        CrmApiModule,
        ParcelModule,
        RouterModule.forChild(StoreRouting),
        CommonModule
    ],
    exports: [],
    declarations: [...components],
    providers: [],
})
export class StoreModule {
}
