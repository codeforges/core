import {NgModule} from '@angular/core';
import {MaterialModules} from '../../core/material/MaterialModules';
import {StaticSideNavListComponent} from './static/StaticSideNavListComponent';
import {DynamicSideNavListComponent} from './dynamic/DynamicSideNavListComponent';
import {RouterModule} from '@angular/router';
import {CFSideMenuItemComponent} from './menu-item/CFSideMenuItemComponent';
import {CommonModule} from '@angular/common';

const components = [
    StaticSideNavListComponent,
    CFSideMenuItemComponent,
    DynamicSideNavListComponent
];

@NgModule({
    imports: [
        MaterialModules,
        RouterModule,
        CommonModule,
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
