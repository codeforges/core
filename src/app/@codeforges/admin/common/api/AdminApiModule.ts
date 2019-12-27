import {NgModule} from '@angular/core';
import {ThingApiModule} from './thing/ThingApiModule';

const modules = [
    ThingApiModule
];

@NgModule({
    imports: [
        ...modules
    ],
    exports: modules
})
export class AdminApiModule {
}
