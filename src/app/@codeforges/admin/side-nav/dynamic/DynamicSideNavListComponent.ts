import {Component, OnInit} from '@angular/core';
import {StaticSideNavListComponent} from '../static/StaticSideNavListComponent';
import {ThingTypeService} from '../../common/api/thing/services/ThingTypeService';
import {Observable} from 'rxjs';
import {ThingType} from '../../common/api/thing/dto/ThingType';
import {SideMenuNavItem} from '../menu-item/SideMenuNavItem';
import {map} from 'rxjs/operators';
import * as _ from 'lodash';

@Component({
    selector: 'cf-dynamic-side-nav-list',
    templateUrl: 'dynamicSideNavList.html'
})

export class DynamicSideNavListComponent extends StaticSideNavListComponent implements OnInit {
    public navItemsStream: Observable<SideMenuNavItem[]>;

    constructor(private typeService: ThingTypeService) {
        super();
    }

    ngOnInit() {
        this.navItemsStream = this.typeService.getMany()
            .pipe(
                map((res: ThingType[]) => {
                    return _.map(res, (type) => {
                        return {
                            displayName: _.capitalize(type.name) + ' Manager',
                            route: type.name + '/list',
                            iconName: type.icon
                        };
                    });
                })
            );
    }
}
