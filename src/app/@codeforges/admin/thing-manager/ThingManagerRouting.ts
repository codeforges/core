import {Route} from '@angular/router';
import {ThingListComponent} from './thing/list/ThingListComponent';
import {AttributeListComponent} from './attributes/list/AttributeListComponent';
import {ThingTypeListComponent} from './thing-type/list/ThingTypeListComponent';

export const ThingManagerRouting: Route[] = [
    {
        path: '', children: [
            {path: 'attributes', component: AttributeListComponent},
            {path: 'types', component: ThingTypeListComponent},
            {path: 'list', component: ThingListComponent},
            {path: '', redirectTo: 'list'}
        ],
    }
];
