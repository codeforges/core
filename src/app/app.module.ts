import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {Route, RouterModule} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LayoutModule} from '@angular/cdk/layout';
import {HttpClientModule} from '@angular/common/http';
import {CFAuthModule} from './@codeforges/core/auth/CFAuthModule';

const routes: Route[] = [
    {path: 'cf', loadChildren: './@codeforges/CodeforgesModule#CodeforgesModule'},
    {path: '**', redirectTo: 'cf', pathMatch: 'full'}
];

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(routes),
        CFAuthModule.forRoot(),
        HttpClientModule,
        LayoutModule,
    ],
    exports: [HttpClientModule, CFAuthModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
