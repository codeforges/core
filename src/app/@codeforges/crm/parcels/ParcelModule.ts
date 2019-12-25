import {NgModule} from '@angular/core';
import {ParcelListComponent} from './list/ParcelListComponent';
import {ListTableModule} from '../../core/material/tables/listTable/ListTableModule';

const components = [
    ParcelListComponent
];

@NgModule({
    imports: [
        ListTableModule
    ],
    exports: [
        ...components
    ],
    declarations: [
        ...components
    ],
    providers: [],
})
export class ParcelModule {
}
