import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {ThingApiModule} from './thing/ThingApiModule';

const modules = [
    ThingApiModule
];

@NgModule({
    imports: [
        HttpClientModule,
        ...modules
    ],
    exports: modules
})
export class AdminApiModule {
}
