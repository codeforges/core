import {Component, OnInit} from '@angular/core';
import {ThingResource} from './common/api/thing/resources/ThingResource';
import {CondOperator} from '@nestjsx/crud-request';

@Component({
    selector: 'cf-admin-component',
    templateUrl: 'cfAdmin.html',
    styleUrls: ['cfAdmin.scss'],
})

export class CFAdminComponent implements OnInit {
    constructor(resource: ThingResource) {
        resource.get('3', {
            page: 1,
            filters: [{field: 'foo', operator: CondOperator.NOT_NULL}]
        }).subscribe();
    }

    ngOnInit() {
    }
}
