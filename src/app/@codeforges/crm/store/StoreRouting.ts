import {Route} from '@angular/router';
import {StoreListComponent} from './list/StoreListComponent';
import {StoreDetailsComponent} from './details/StoreDetailsComponent';

export const StoreRouting: Route[] = [
    {
        path: '', children: [
            {path: 'list', component: StoreListComponent},
            {path: 'details/:id', component: StoreDetailsComponent},
            {path: 'details/test', component: StoreDetailsComponent},
            {path: '', redirectTo: 'list'}
        ],
    }
];
