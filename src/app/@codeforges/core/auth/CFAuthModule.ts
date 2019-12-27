import {NgModule, Optional, SkipSelf} from '@angular/core';
import {AuthResource} from './resources/AuthResource';
import {AuthService} from './services/AuthService';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {AuthInterceptor} from './interceptors/AuthInterceptor';

const rootProviders = [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    AuthResource,
    AuthService
];

@NgModule({
    exports: [],
    declarations: [],
    providers: [],
})
export class CFAuthModule {
    constructor(@Optional() @SkipSelf() parent: CFAuthModule) {
        if (parent) {
            throw new Error(
                'CFAuthModule is already loaded. Import it in the AppModule only');
        }
    }

    static forRoot() {
        return {
            ngModule: CFAuthModule,
            providers: [...rootProviders]
        };
    }
}
