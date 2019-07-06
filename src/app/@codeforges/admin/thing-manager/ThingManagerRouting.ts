import {Route} from '@angular/router';
import {ThingListComponent} from './thing/list/ThingListComponent';
import {AttributeListComponent} from './attributes/list/AttributeListComponent';

export const ThingManagerRouting: Route[] = [
    {
        path: '', children: [
            {path: 'attributes', component: AttributeListComponent},
            {path: 'list', component: ThingListComponent},
            {path: '', redirectTo: 'list'}
        ],
    }
];
