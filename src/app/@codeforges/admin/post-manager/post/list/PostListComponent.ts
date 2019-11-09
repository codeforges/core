import {ChangeDetectionStrategy, Component} from '@angular/core';
import {GeneralTableColumn} from '../../../../core/material/tables/dataModels/GeneralTableColumn';
import {ThingService} from '../../../common/api/thing/services/ThingService';
import {Thing} from '../../../common/api/thing/dto/Thing';
import {MatDialog} from '@angular/material';
import {GeneralListComponent} from '../../../common/components/GeneralListComponent';
import {CreatePostDialogComponent} from '../dialogs/CreatePostDialogComponent';
import {ThingTypeService} from '../../../common/api/thing/services/ThingTypeService';

@Component({
    selector: 'cf-thing-list',
    templateUrl: 'postList.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class PostListComponent extends GeneralListComponent<Thing> {
    public displayedColumns: GeneralTableColumn[] = [
        {columnKey: 'id', columnName: 'ID'},
        {
            columnKey: 'type.attributes',
            columnKeySuffix: '-title',
            columnName: 'Title',
            findBy: {
                predicate: element => element.key === 'title',
                path: 'value.value'
            },
            truncateSize: 50
        },
        {
            columnKey: 'type.attributes',
            columnKeySuffix: '-content',
            columnName: 'Content',
            findBy: {
                predicate: element => {
                    return element.key === 'content';
                },
                path: 'value.value'
            },
            truncateSize: 50
        },
    ];

    constructor(private thingTypeService: ThingTypeService,
                thingService: ThingService,
                matDialog: MatDialog) {
        super(thingService,
            matDialog,
            ['id', 'name', 'type'],
            {
                filters: [
                    {field: 'type.name', operator: 'eq', value: 'post'},
                    {field: 'isInitial', operator: 'ne', value: 'true'},
                ]
            }
        );
    }

    deleteItem(item: Thing) {
        this.delete(item);
    }

    openCreateDialog(item?: Thing) {
        this.thingTypeService.getType('post')
            .subscribe(type => this.create(CreatePostDialogComponent, item, type));
    }

}
