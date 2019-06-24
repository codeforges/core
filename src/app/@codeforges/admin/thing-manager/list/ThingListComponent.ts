import {Component, OnInit} from '@angular/core';
import {GeneralTableColumn} from '../../../core/material/tables/dataModels/GeneralTableColumn';
import {ThingService} from '../../common/api/thing/services/ThingService';
import {Observable} from 'rxjs';
import {Thing} from '../../common/api/thing/dto/Thing';
import {MatDialog} from '@angular/material';
import {CreateThingDialogComponent} from '../dialogs/CreateThingDialogComponent';

@Component({
    selector: 'cf-thing-list',
    templateUrl: 'thingList.html'
})

export class ThingListComponent implements OnInit {
    public thingsStream: Observable<Thing[]>;

    public displayedColumns: GeneralTableColumn[] = [
        {columnKey: 'id', columnName: 'ID'},
        {columnKey: 'name', columnName: 'Name'},
        {columnKey: 'type.name', columnName: 'Type'},
    ];

    constructor(private readonly thingService: ThingService,
                private readonly matDialog: MatDialog) {
    }

    ngOnInit() {
        this.setThingStream();
    }

    public openCreateDialog() {
        const ref = this.matDialog.open(CreateThingDialogComponent, {
            width: '50vw',
        });
        ref.afterClosed().subscribe((success) => {
            if (success) {
                this.setThingStream();
            }
        });
    }

    private setThingStream() {
        this.thingsStream = this.thingService.getMany({select: ['id', 'name', 'type']});
    }
}
