import {NgModule} from '@angular/core';
import {MatButtonModule, MatCardModule, MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule} from '@angular/material';

const modules = [
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
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
