import {Component} from '@angular/core';
import {GeneralTableColumn} from '../../../../core/material/tables/dataModels/GeneralTableColumn';
import {MatDialog} from '@angular/material';
import {GeneralListComponent} from '../../../common/components/GeneralListComponent';
import {ThingTypeAttribute} from '../../../common/api/thing/dto/ThingTypeAttribute';
import {ThingAttributeService} from '../../../common/api/thing/services/ThingAttributeService';
import {CreateAttributeDialogComponent} from '../dialogs/CreateAttributeDialogComponent';

@Component({
    selector: 'cf-thing-list',
    templateUrl: 'attributeList.html'
})

export class AttributeListComponent extends GeneralListComponent<ThingTypeAttribute> {

    public displayedColumns: GeneralTableColumn[] = [
        {columnKey: 'id', columnName: 'ID'},
        {columnKey: 'key', columnName: 'Key'},
    ];

    constructor(attributeService: ThingAttributeService,
                matDialog: MatDialog) {
        super(attributeService, matDialog);
    }

    deleteItem(item: ThingTypeAttribute) {
        this.delete(item);
    }

    openCreateDialog(item?: ThingTypeAttribute) {
        this.create(CreateAttributeDialogComponent, item);
    }
}
