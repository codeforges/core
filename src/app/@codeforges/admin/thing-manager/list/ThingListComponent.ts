import {Component, OnInit} from '@angular/core';
import {GeneralTableColumn} from '../../../core/material/tables/dataModels/GeneralTableColumn';
import {ThingService} from '../../common/api/thing/services/ThingService';
import {Observable} from 'rxjs';
import {Thing} from '../../common/api/thing/dto/Thing';

@Component({
    selector: 'cf-thing-list',
    templateUrl: 'thingList.html'
})

export class ThingListComponent implements OnInit {
    public thingsStream: Observable<Thing[]>;

    public displayedColumns: GeneralTableColumn[] = [
        {columnKey: 'id', columnName: 'ID'},
        {columnKey: 'name', columnName: 'Name'},
        {columnKey: 'type', columnName: 'Type'},
    ];

    constructor(private readonly thingService: ThingService) {
    }

    ngOnInit() {
        this.thingsStream = this.thingService.getMany();
    }
}
