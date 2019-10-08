import {Route} from '@angular/router';
import {PostListComponent} from './post/list/PostListComponent';

export const PostManagerRouting: Route[] = [
    {
        path: '', children: [
            {path: 'list', component: PostListComponent},
            {path: '', redirectTo: 'list'}
        ],
    }
];
