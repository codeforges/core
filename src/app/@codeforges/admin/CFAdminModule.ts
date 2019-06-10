import {NgModule} from '@angular/core';
import {CFAdminComponent} from './CFAdminComponent';
import {RouterModule} from '@angular/router';
import {CFAdminRouting} from './CFAdminRouting';
import {MaterialModules} from '../core/material/MaterialModules';
import {CommonModule} from '@angular/common';
import {CFSideNavModule} from './side-nav/CFSideNavModule';

@NgModule({
    imports: [
        CommonModule,
        MaterialModules,
        CFSideNavModule,
        RouterModule.forChild(CFAdminRouting),
    ],
    exports: [],
    declarations: [
        CFAdminComponent
    ],
    providers: [],
})
export class CFAdminModule {
}
