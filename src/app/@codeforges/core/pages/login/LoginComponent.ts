import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';
import {finalize} from 'rxjs/operators';
import {Router} from '@angular/router';
import {UserLogin} from '../../auth/dto/UserLogin';
import {AuthService} from '../../auth/services/AuthService';

@Component({
    selector: 'app-login',
    templateUrl: 'login.html',
    styleUrls: ['login.scss']
})

export class LoginComponent {
    public user = {} as UserLogin;
    public isLoading = false;
    public errorMessage: string;

    private successNavigation = ['crm', 'details', 'test'];

    constructor(private readonly authService: AuthService,
                private readonly router: Router) {
    }

    public onSubmit(form: NgForm) {
        if (form.valid) {
            this.isLoading = true;
            this.authService.signIn(this.user)
                .pipe(finalize(() => this.isLoading = false))
                .subscribe(
                    () => {
                        this.router.navigate(this.successNavigation);
                    },
                    (err) => this.errorMessage = err
                );
        }
    }
}
