import {Route} from '@angular/router';
import {ThingListComponent} from './list/ThingListComponent';

export const ThingRouting: Route[] = [
    {
        path: '', children: [
            {path: 'list', component: ThingListComponent},
            {path: '', redirectTo: 'list'}
        ],
    }
];
