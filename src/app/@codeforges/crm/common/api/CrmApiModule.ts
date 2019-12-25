import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {StoreApiModule} from './store/StoreApiModule';

const modules = [
    StoreApiModule
];

@NgModule({
    imports: [
        HttpClientModule,
        ...modules
    ],
    exports: modules
})
export class CrmApiModule {
}
