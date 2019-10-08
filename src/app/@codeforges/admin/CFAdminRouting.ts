import {Route} from '@angular/router';
import {CFAdminComponent} from './CFAdminComponent';

export const CFAdminRouting: Route[] = [
    {
        path: '', children: [
            {
                path: 'admin',
                component: CFAdminComponent,
                children: [
                    {path: 'things', loadChildren: './thing-manager/ThingManagerModule#ThingManagerModule'},
                    {path: 'post', loadChildren: './post-manager/PostManagerModule#PostManagerModule'}
                ]
            },
            {path: '', redirectTo: 'admin'}
        ]
    }
];
