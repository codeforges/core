import {Component} from '@angular/core';
import {GeneralTableColumn} from '../../../../core/material/tables/dataModels/GeneralTableColumn';
import {ThingService} from '../../../common/api/thing/services/ThingService';
import {Thing} from '../../../common/api/thing/dto/Thing';
import {MatDialog} from '@angular/material';
import {GeneralListComponent} from '../../../common/components/GeneralListComponent';
import {CreatePostDialogComponent} from '../dialogs/CreatePostDialogComponent';

@Component({
    selector: 'cf-thing-list',
    templateUrl: 'postList.html'
})

export class PostListComponent extends GeneralListComponent<Thing> {
    public displayedColumns: GeneralTableColumn[] = [
        {columnKey: 'id', columnName: 'ID'},
        {columnKey: 'name', columnName: 'Title'},
        {
            columnKey: 'attributes',
            columnName: 'Content',
            findBy: {
                predicate: (element => element.key === 'post_content'),
                path: 'content'
            },
            truncateSize: 50
        },
    ];

    constructor(thingService: ThingService,
                matDialog: MatDialog) {
        super(thingService,
            matDialog,
            ['id', 'name', 'attributes'],
            {
                filters: [{field: 'type.name', operator: 'eq', value: 'post'}]
            }
        );
    }

    deleteItem(item: Thing) {
        this.delete(item);
    }

    openCreateDialog(item?: Thing) {
        this.create(CreatePostDialogComponent, item);
    }

}
