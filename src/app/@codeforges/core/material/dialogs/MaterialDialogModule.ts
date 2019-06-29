import {NgModule} from '@angular/core';
import {MatButtonModule, MatDialogModule} from '@angular/material';
import {ConfirmationDialogComponent} from './confirmation/ConfirmationDialogComponent';

@NgModule({
    imports: [
        MatDialogModule,
        MatButtonModule
    ],
    exports: [
        ConfirmationDialogComponent
    ],
    entryComponents: [
        ConfirmationDialogComponent
    ],
    declarations: [
        ConfirmationDialogComponent
    ],
    providers: [],
})
export class CFMaterialDialogModule {
}
