import {Component, OnInit} from '@angular/core';
import {StaticSideNavListComponent} from '../static/StaticSideNavListComponent';

@Component({
    selector: 'cf-dynamic-side-nav-list',
    templateUrl: 'dynamicSideNavList.html'
})

export class DynamicSideNavListComponent extends StaticSideNavListComponent implements OnInit {
    constructor() {
        super();
    }

    ngOnInit() {
    }
}
