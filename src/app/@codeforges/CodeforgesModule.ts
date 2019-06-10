import {NgModule} from '@angular/core';
import {CFAdminModule} from './admin/CFAdminModule';
import {RouterModule} from '@angular/router';
import {CodeforgesRouting} from './CodeforgesRouting';

@NgModule({
    imports: [
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
