import {NgModule} from '@angular/core';
import {CFAdminModule} from './admin/CFAdminModule';
import {RouterModule} from '@angular/router';
import {CodeforgesRouting} from './CodeforgesRouting';
import {CFCorePagesModule} from './core/pages/CFCorePagesModule';

@NgModule({
    imports: [
        CFCorePagesModule,
        CFAdminModule,
        RouterModule.forChild(CodeforgesRouting)
    ],
    exports: [
    ],
    declarations: [],
    providers: [],
})
export class CodeforgesModule {
}
