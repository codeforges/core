import {NgModule} from '@angular/core';
import {PostListComponent} from './post/list/PostListComponent';
import {GeneralPageModule} from '../common/pages/general/GeneralPageModule';
import {MaterialModules} from '../../core/material/MaterialModules';
import {RouterModule} from '@angular/router';
import {PostManagerRouting} from './PostManagerRouting';
import {ListTableModule} from '../../core/material/tables/listTable/ListTableModule';
import {CommonModule} from '@angular/common';
import {CreatePostDialogComponent} from './post/dialogs/CreatePostDialogComponent';
import {ReactiveFormsModule} from '@angular/forms';
import {CFMaterialDialogModule} from '../../core/material/dialogs/MaterialDialogModule';
import {NameModule} from '../common/forms/attributeInput/CFAttrTypeSelectModule';

const components = [
    PostListComponent,
    CreatePostDialogComponent,
];

@NgModule({
    imports: [
        CommonModule,
        CFMaterialDialogModule,
        RouterModule.forChild(PostManagerRouting),
        MaterialModules,
        ListTableModule,
        GeneralPageModule,
        ReactiveFormsModule,
        NameModule
    ],
    exports: [],
    entryComponents: [
        CreatePostDialogComponent,
    ],
    declarations: components,
    providers: [],
})
export class PostManagerModule {
}
