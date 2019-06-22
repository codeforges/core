import {NgModule} from '@angular/core';
import {
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatProgressBarModule,
    MatSelectModule,
    MatSidenavModule,
    MatToolbarModule,
    MatTooltipModule
} from '@angular/material';

const modules = [
    MatSidenavModule,
    MatToolbarModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatTooltipModule,
    MatProgressBarModule,
    MatIconModule
];

@NgModule({
    imports: modules,
    exports: modules,
    declarations: [],
    providers: [],
})
export class MaterialModules {
}
