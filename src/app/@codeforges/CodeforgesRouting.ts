import {Route} from '@angular/router';

export const CodeforgesRouting: Route[] = [
    {
        path: '', children: [
            {path: 'admin', loadChildren: './admin/CFAdminModule#CFAdminModule'},
            {path: '', redirectTo: 'admin', pathMatch: 'full'}
        ]
    }
];
