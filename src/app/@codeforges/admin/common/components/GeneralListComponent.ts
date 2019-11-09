import {EMPTY, Observable} from 'rxjs';
import {MatDialog} from '@angular/material';
import {OnInit} from '@angular/core';
import {CrudAware} from '../../../nestjsx/crud/CrudAware';
import {QueryFields} from '@nestjsx/crud-request';
import {ComponentType} from '@angular/cdk/portal';
import {finalize, switchMap} from 'rxjs/operators';
import {ConfirmationDialogComponent} from '../../../core/material/dialogs/confirmation/ConfirmationDialogComponent';
import {CrudQueryParams} from '../../../nestjsx/crud/CrudQueryParams';
import * as _ from 'lodash';


export abstract class GeneralListComponent<T> implements OnInit {
    public listStream: Observable<T[]>;
    public isLoading = false;

    protected constructor(private readonly service: CrudAware<T>,
                          private readonly matDialog: MatDialog,
                          private queryFields?: QueryFields,
                          private query?: CrudQueryParams) {
    }

    ngOnInit() {
        this.updateListStream();
    }

    public abstract openCreateDialog(item?: T);

    public abstract deleteItem(item: T);

    protected create<K>(dialogComponent: ComponentType<K>, item?: T, additionalData?: any) {
        const ref = this.matDialog.open(dialogComponent, {
            width: '50vw',
            data: {item, additionalData}
        });
        ref.afterClosed().subscribe((success) => {
            if (success) {
                this.updateListStream();
            }
        });
    }

    protected delete(item: T | any) {
        const ref = this.matDialog.open(ConfirmationDialogComponent);
        ref.afterClosed()
            .pipe(
                switchMap((success) => {
                    if (success) {
                        this.isLoading = true;
                        return this.service.delete(item.id);
                    } else {
                        return EMPTY;
                    }
                }),
                finalize(() => this.isLoading = false)
            )
            .subscribe((success) => this.updateListStream());
    }

    private updateListStream() {
        const options = this.queryFields ? {select: this.queryFields} : null;
        this.listStream = this.service.getMany(_.merge(options, this.query));
    }
}
