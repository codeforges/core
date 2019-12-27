import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {Router} from '@angular/router';
import {catchError} from 'rxjs/operators';
import * as _ from 'lodash';
import {AuthService} from '../services/AuthService';

@Injectable({providedIn: 'root'})
export class AuthInterceptor implements HttpInterceptor {

    constructor(private router: Router,
                private authService: AuthService) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (this.isAssetsRequest(req)) {
            return next.handle(req);
        }

        let authorizedRequest;

        if (this.authService.loadToken()) {
            authorizedRequest = req.clone({
                headers: req.headers.set(
                    'Authorization',
                    `Bearer ${this.authService.loadToken()}`
                )
            });
        }
        return next.handle(authorizedRequest || req)
            .pipe(
                catchError((err: any) => {
                    if (err instanceof HttpErrorResponse) {
                        if (err.status === 401) {
                            return this.handleAuthError(req, next);
                        }
                        return throwError(err);
                    } else {
                        return throwError(err);
                    }
                })
            );
    }

    private isAssetsRequest(req: HttpRequest<any>) {
        return _.includes(req.url, 'assets') || _.includes(req.url, 'Module');
    }

    private handleAuthError(request: HttpRequest<any>, next: HttpHandler) {
        this.authService.logout();
        this.router.navigate(['cf', 'login']);
        return throwError('Unauthorized');
    }
}
