import {NgModule} from '@angular/core';
import {ParcelListComponent} from './list/ParcelListComponent';
import {ListTableModule} from '../../core/material/tables/listTable/ListTableModule';
import {ParcelEditComponent} from './edit/ParcelEditComponent';
import {
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule
} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

const components = [
    ParcelListComponent,
    ParcelEditComponent
];

@NgModule({
    imports: [
        ListTableModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatSelectModule,
        MatDialogModule,
        MatCardModule,
        ReactiveFormsModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule,
        MatTooltipModule,
        CommonModule
    ],
    exports: [
        ...components
    ],
    declarations: [
        ...components
    ],
    entryComponents: [
        ParcelEditComponent,
    ],
    providers: [],
})
export class ParcelModule {
}
