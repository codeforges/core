import {NgModule} from '@angular/core';
import {ThingListComponent} from './thing/list/ThingListComponent';
import {GeneralPageModule} from '../common/pages/general/GeneralPageModule';
import {MaterialModules} from '../../core/material/MaterialModules';
import {RouterModule} from '@angular/router';
import {ThingManagerRouting} from './ThingManagerRouting';
import {ListTableModule} from '../../core/material/tables/listTable/ListTableModule';
import {CommonModule} from '@angular/common';
import {CreateThingDialogComponent} from './thing/dialogs/CreateThingDialogComponent';
import {ReactiveFormsModule} from '@angular/forms';
import {CFMaterialDialogModule} from '../../core/material/dialogs/MaterialDialogModule';
import {AttributeListComponent} from './attributes/list/AttributeListComponent';
import {CreateAttributeDialogComponent} from './attributes/dialogs/CreateAttributeDialogComponent';

const components = [
    ThingListComponent,
    CreateThingDialogComponent,
    CreateAttributeDialogComponent,
    AttributeListComponent
];

@NgModule({
    imports: [
        CommonModule,
        CFMaterialDialogModule,
        RouterModule.forChild(ThingManagerRouting),
        MaterialModules,
        ListTableModule,
        GeneralPageModule,
        ReactiveFormsModule
    ],
    exports: [],
    entryComponents: [
        CreateThingDialogComponent,
        CreateAttributeDialogComponent,
    ],
    declarations: components,
    providers: [],
})
export class ThingManagerModule {
}
