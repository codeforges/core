import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {SideMenuNavItem} from './SideMenuNavItem';
import {NavigationEnd, Router} from '@angular/router';
import * as _ from 'lodash';

@Component({
    selector: 'cf-side-menu-item',
    templateUrl: 'cfSideMenuItem.html',
    styleUrls: ['cfSideMenuItem.scss'],
    animations: [
        trigger('indicatorRotate', [
            state('collapsed', style({transform: 'rotate(0deg)'})),
            state('expanded', style({transform: 'rotate(180deg)'})),
            transition('expanded <=> collapsed',
                animate('225ms cubic-bezier(0.4,0.0,0.2,1)')
            ),
        ])
    ]
})

export class CFSideMenuItemComponent implements OnInit {
    @Input() item: SideMenuNavItem;
    @Input() expanded = false;
    @Input() depth = 0;
    @HostBinding('attr.aria-expanded') ariaExpanded = this.expanded;

    constructor(public router: Router) {
    }

    ngOnInit() {
        this.setExpanded(this.router.url);
        this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                this.setExpanded(event.urlAfterRedirects);
            }
        });
    }

    onItemSelected(item: SideMenuNavItem) {
        if (item.children && item.children.length) {
            this.expanded = !this.expanded;
        }
    }

    private setExpanded(url: string) {
        this.expanded =
            _.includes(url, this.item.route) ||
            Boolean(_.find(this.item.children, (item) => _.includes(url, item.route)));
        this.ariaExpanded = this.expanded;
    }

}
