import {Route} from '@angular/router';
import {CFAdminComponent} from './CFAdminComponent';

export const CFAdminRouting: Route[] = [
    {
        path: '', children: [
            {path: 'admin', component: CFAdminComponent},
            {path: '', redirectTo: 'admin'}
        ]
    }
];
