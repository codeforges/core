import {Component} from '@angular/core';
import {GeneralTableColumn} from '../../../../core/material/tables/dataModels/GeneralTableColumn';
import {MatDialog} from '@angular/material';
import {GeneralListComponent} from '../../../common/components/GeneralListComponent';
import {ThingAttribute} from '../../../common/api/thing/dto/ThingAttribute';
import {ThingAttributeService} from '../../../common/api/thing/services/ThingAttributeService';
import {CreateAttributeDialogComponent} from '../dialogs/CreateAttributeDialogComponent';

@Component({
    selector: 'cf-thing-list',
    templateUrl: 'attributeList.html'
})

export class AttributeListComponent extends GeneralListComponent<ThingAttribute> {

    public displayedColumns: GeneralTableColumn[] = [
        {columnKey: 'id', columnName: 'ID'},
        {columnKey: 'key', columnName: 'Key'},
    ];

    constructor(attributeService: ThingAttributeService,
                matDialog: MatDialog) {
        super(attributeService, matDialog);
    }

    deleteItem(item: ThingAttribute) {
        this.delete(item);
    }

    openCreateDialog(item?: ThingAttribute) {
        this.create(CreateAttributeDialogComponent, item);
    }
}
