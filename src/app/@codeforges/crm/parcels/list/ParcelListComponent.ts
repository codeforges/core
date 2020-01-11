import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CrudPageable} from '../../../core/material/tables/dataModels/Pageable';
import {Parcel} from '../../common/api/parcel/dto/Parcel';
import {PageRequest} from '../../../core/material/tables/dataModels/PageRequest';
import {GeneralTableColumn} from '../../../core/material/tables/dataModels/GeneralTableColumn';
import {MatDialog} from '@angular/material';
import {ParcelEditComponent} from '../edit/ParcelEditComponent';

@Component({
    selector: 'app-parcel-list',
    templateUrl: 'parcelList.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class ParcelListComponent implements OnInit {
    @Input() parcels: CrudPageable<Parcel>;
    @Output() pageSelect: EventEmitter<PageRequest> = new EventEmitter();

    public displayColumns: GeneralTableColumn[] = [
        {
            columnKey: 'id',
            columnName: 'ID'
        },
        {
            columnKey: ['sender.firstName', 'sender.lastName'],
            columnName: 'Sender',
        },
        {
            columnKey: ['retriever.firstName', 'retriever.lastName'],
            columnName: 'Retriever',
        },
        {
            columnKey: ['destination.address', 'destination.city', 'destination.country'],
            columnKeySeparator: ', ',
            columnName: 'Destination',
        },
        {
            columnKey: 'storage.name',
            columnName: 'Storage',
        }
    ];

    constructor(private matDialog: MatDialog) {
    }

    ngOnInit() {
    }

    public onPageSelect($event) {

    }

    public openCreateDialog() {
        this.matDialog.open(ParcelEditComponent);
    }

    public openEditDialog() {

    }
}
