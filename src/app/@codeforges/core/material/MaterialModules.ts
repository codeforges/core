import {NgModule} from '@angular/core';
import {MatButtonModule, MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule} from '@angular/material';

const modules = [
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatListModule,
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
