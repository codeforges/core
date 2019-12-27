import {NgModule} from '@angular/core';
import {AuthResource} from './resources/AuthResource';
import {AuthService} from './services/AuthService';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AuthInterceptor} from './interceptors/AuthInterceptor';

@NgModule({
    imports: [
        HttpClientModule,
    ],
    exports: [],
    declarations: [],
    providers: [
        {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
        AuthResource,
        AuthService
    ],
})
export class CFAuthModule {
}
