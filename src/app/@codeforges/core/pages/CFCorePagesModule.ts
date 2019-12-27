import {NgModule} from '@angular/core';
import {LoginModule} from './login/LoginModule';

const modules = [
    LoginModule
];

@NgModule({
    imports: [...modules],
    exports: [...modules],
})
export class CFCorePagesModule {
}
