import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {AuthToken} from '../dto/AuthToken';
import {HttpClient} from '@angular/common/http';
import {CoreApiConfig} from '../../api/CFCoreApiConfig';
import {UserLogin} from '../dto/UserLogin';

@Injectable()
export class AuthResource {

    private readonly URL = CoreApiConfig.API_ROOT_URL + '/auth';

    constructor(private readonly httpClient: HttpClient) {
    }

    public signInUser(user: UserLogin): Observable<AuthToken> {
        return this.httpClient.post(this.URL, user) as Observable<AuthToken>;
    }
}
