import {NgModule} from '@angular/core';
import {StoreApiModule} from './store/StoreApiModule';

const modules = [
    StoreApiModule
];

@NgModule({
    imports: [
        ...modules
    ],
    exports: modules
})
export class CrmApiModule {
}
