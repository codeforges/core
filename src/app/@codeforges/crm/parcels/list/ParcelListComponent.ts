import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CrudPageable} from '../../../core/material/tables/dataModels/Pageable';
import {Parcel} from '../../common/api/parcel/dto/Parcel';
import {PageRequest} from '../../../core/material/tables/dataModels/PageRequest';
import {GeneralTableColumn} from '../../../core/material/tables/dataModels/GeneralTableColumn';

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
        }
    ];

    constructor() {
    }

    ngOnInit() {
    }

    public onPageSelect($event) {

    }
}
