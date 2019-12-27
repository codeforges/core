import {NgModule} from '@angular/core';
import {LoginComponent} from './LoginComponent';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {LoginRoutes} from './LoginRoutes';
import {FormsModule} from '@angular/forms';
import {MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule, MatProgressBarModule} from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(LoginRoutes),
        MatCardModule,
        MatFormFieldModule,
        MatProgressBarModule,
        MatButtonModule,
        MatInputModule
    ],
    exports: [],
    declarations: [LoginComponent],
    providers: [],
})
export class LoginModule {
}
