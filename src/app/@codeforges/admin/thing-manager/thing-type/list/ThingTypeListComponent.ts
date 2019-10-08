import {Component} from '@angular/core';
import {GeneralTableColumn} from '../../../../core/material/tables/dataModels/GeneralTableColumn';
import {MatDialog} from '@angular/material';
import {GeneralListComponent} from '../../../common/components/GeneralListComponent';
import {ThingAttribute} from '../../../common/api/thing/dto/ThingAttribute';
import {ThingAttributeService} from '../../../common/api/thing/services/ThingAttributeService';
import {CreateThingTypeDialogComponent} from '../dialogs/CreateThingTypeDialogComponent';
import {ThingType} from '../../../common/api/thing/dto/ThingType';
import {ThingTypeService} from '../../../common/api/thing/services/ThingTypeService';
import {Thing} from '../../../common/api/thing/dto/Thing';

@Component({
    selector: 'cf-thing-type-list',
    templateUrl: 'thingTypeList.html'
})

export class ThingTypeListComponent extends GeneralListComponent<ThingType> {

    public displayedColumns: GeneralTableColumn[] = [
        {columnKey: 'id', columnName: 'ID'},
        {columnKey: 'name', columnName: 'Name'},
        {
            columnKey: 'attributes',
            columnName: 'Attributes',
            newlineArrayItems: true,
            arrayKey: 'key'
        },
    ];

    constructor(typeService: ThingTypeService,
                matDialog: MatDialog) {
        super(typeService, matDialog);
    }

    deleteItem(item: ThingType) {
        this.delete(item);
    }

    openCreateDialog(item?: ThingType) {
        this.create(CreateThingTypeDialogComponent, item);
    }
}
