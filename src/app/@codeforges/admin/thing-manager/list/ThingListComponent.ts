import {Component, OnInit} from '@angular/core';
import {GeneralTableColumn} from '../../../core/material/tables/dataModels/GeneralTableColumn';
import {ThingService} from '../../common/api/thing/services/ThingService';
import {EMPTY, Observable} from 'rxjs';
import {Thing} from '../../common/api/thing/dto/Thing';
import {MatDialog} from '@angular/material';
import {CreateThingDialogComponent} from '../dialogs/CreateThingDialogComponent';
import {ConfirmationDialogComponent} from '../../../core/material/dialogs/confirmation/ConfirmationDialogComponent';
import {finalize, switchMap} from 'rxjs/operators';

@Component({
    selector: 'cf-thing-list',
    templateUrl: 'thingList.html'
})

export class ThingListComponent implements OnInit {
    public thingsStream: Observable<Thing[]>;
    public isLoading = false;

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

    public openCreateDialog($event?: Thing) {
        const ref = this.matDialog.open(CreateThingDialogComponent, {
            width: '50vw',
            data: {thing: $event}
        });
        ref.afterClosed().subscribe((success) => {
            if (success) {
                this.setThingStream();
            }
        });
    }

    public deleteThing(thing: Thing) {
        const ref = this.matDialog.open(ConfirmationDialogComponent);
        ref.afterClosed()
            .pipe(
                switchMap((success) => {
                    if (success) {
                        this.isLoading = true;
                        return this.thingService.delete(thing.id);
                    } else {
                        return EMPTY;
                    }
                }),
                finalize(() => this.isLoading = false)
            )
            .subscribe((success) => this.setThingStream());
    }

    private setThingStream() {
        this.thingsStream = this.thingService.getMany({select: ['id', 'name', 'type']});
    }
}
