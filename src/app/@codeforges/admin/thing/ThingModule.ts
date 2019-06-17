import {NgModule} from '@angular/core';
import {ThingListComponent} from './list/ThingListComponent';
import {GeneralPageModule} from '../common/pages/general/GeneralPageModule';
import {MaterialModules} from '../../core/material/MaterialModules';
import {RouterModule} from '@angular/router';
import {ThingRouting} from './ThingRouting';

const components = [
    ThingListComponent
];

@NgModule({
    imports: [
        RouterModule.forChild(ThingRouting),
        MaterialModules,
        GeneralPageModule
    ],
    exports: [],
    declarations: components,
    providers: [],
})
export class ThingModule {
}
