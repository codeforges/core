import {NgModule} from '@angular/core';
import {MaterialModules} from '../../core/material/MaterialModules';
import {StaticSideNavListComponent} from './static/StaticSideNavListComponent';
import {DynamicSideNavListComponent} from './dynamic/DynamicSideNavListComponent';

const components = [
    StaticSideNavListComponent,
    DynamicSideNavListComponent
];

@NgModule({
    imports: [
        MaterialModules
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
