import {NgModule} from '@angular/core';
import {MaterialModules} from '../../core/material/MaterialModules';
import {StaticSideNavListComponent} from './static/StaticSideNavListComponent';
import {DynamicSideNavListComponent} from './dynamic/DynamicSideNavListComponent';
import {RouterModule} from '@angular/router';

const components = [
    StaticSideNavListComponent,
    DynamicSideNavListComponent
];

@NgModule({
    imports: [
        MaterialModules,
        RouterModule
    ],
    exports: [
        components
    ],
    declarations: [
        components
    ],
    providers: [],
})
export class CFSideNavModule {
}
