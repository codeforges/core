import {Route} from '@angular/router';

export const CodeforgesRouting: Route[] = [
    {
        path: '', children: [
            {path: 'admin', loadChildren: './admin/CFAdminModule#CFAdminModule'},
            {path: 'crm', loadChildren: './crm/store/StoreModule#StoreModule'},
            {path: '', redirectTo: 'admin', pathMatch: 'full'}
        ]
    }
];
