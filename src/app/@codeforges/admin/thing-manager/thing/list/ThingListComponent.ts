import {Component} from '@angular/core';
import {GeneralTableColumn} from '../../../../core/material/tables/dataModels/GeneralTableColumn';
import {ThingService} from '../../../common/api/thing/services/ThingService';
import {Thing} from '../../../common/api/thing/dto/Thing';
import {MatDialog} from '@angular/material';
import {GeneralListComponent} from '../../../common/components/GeneralListComponent';
import {CreateThingDialogComponent} from '../dialogs/CreateThingDialogComponent';

@Component({
    selector: 'cf-thing-list',
    templateUrl: 'thingList.html'
})

export class ThingListComponent extends GeneralListComponent<Thing> {
    public displayedColumns: GeneralTableColumn[] = [
        {columnKey: 'id', columnName: 'ID'},
        {columnKey: 'name', columnName: 'Name'},
        {columnKey: 'type.name', columnName: 'Type'},
    ];

    constructor(thingService: ThingService,
                matDialog: MatDialog) {
        super(thingService, matDialog, ['id', 'name', 'type']);
    }

    deleteItem(item: Thing) {
        this.delete(item);
    }

    openCreateDialog(item?: Thing) {
        this.create(CreateThingDialogComponent, item);
    }

}
