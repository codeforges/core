import {NgModule} from '@angular/core';
import {GeneralPageComponent} from './GeneralPageComponent';
import {MaterialModules} from '../../../../core/material/MaterialModules';
import {CommonModule} from '@angular/common';

@NgModule({
    imports: [MaterialModules, CommonModule],
    exports: [GeneralPageComponent],
    declarations: [GeneralPageComponent],
    providers: [],
})
export class GeneralPageModule {
}
