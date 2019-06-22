import {NgModule} from '@angular/core';
import {
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatProgressBarModule,
    MatSidenavModule,
    MatToolbarModule,
    MatTooltipModule
} from '@angular/material';

const modules = [
    MatSidenavModule,
    MatToolbarModule,
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
