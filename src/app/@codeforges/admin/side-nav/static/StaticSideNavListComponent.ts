import {Component, OnInit} from '@angular/core';
import {SideMenuNavItem} from '../menu-item/SideMenuNavItem';

@Component({
    selector: 'cf-static-side-nav-list',
    templateUrl: 'staticSideNavList.html'
})

export class StaticSideNavListComponent implements OnInit {
    public navItems: SideMenuNavItem[] = [
        // {
        //     displayName: 'Thing Manager',
        //     children: [
        //         {displayName: 'Things', route: 'things/list'},
        //         {displayName: 'Attributes', route: 'things/attributes'},
        //         {displayName: 'Types', route: 'things/types'},
        //     ]
        // }

        {displayName: 'Store Dashboard', route: 'crm/details/test'},
    ];

    constructor() {
    }

    ngOnInit() {
    }
}
