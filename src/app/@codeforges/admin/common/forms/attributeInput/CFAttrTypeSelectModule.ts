import {NgModule} from '@angular/core';
import {CFAttrTypeSelectComponent} from './CFAttrTypeSelectComponent';
import {MatSelectModule} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

const components = [CFAttrTypeSelectComponent];

@NgModule({
    imports: [
        MatSelectModule,
        ReactiveFormsModule,
        CommonModule
    ],
    exports: components,
    declarations: components,
    providers: [],
})
export class NameModule {
}
