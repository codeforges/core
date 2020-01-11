import {Route} from '@angular/router';
import {CFAdminComponent} from './CFAdminComponent';

export const CFAdminRouting: Route[] = [
    {
        path: '', children: [
            {path: '', redirectTo: 'admin', pathMatch: 'full'},
            {
                path: 'admin',
                component: CFAdminComponent,
                children: [
                    {path: 'things', loadChildren: './thing-manager/ThingManagerModule#ThingManagerModule'},
                    {path: 'post', loadChildren: './post-manager/PostManagerModule#PostManagerModule'},
                    {path: 'crm/store', loadChildren: '../crm/store/StoreModule#StoreModule'},
                    {path: '', redirectTo: 'crm/store/details/test', pathMatch: 'full'},
                ],
                // canActivate: [AuthGuard]
            },
        ],
    },
];
