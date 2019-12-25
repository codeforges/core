import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ParcelService} from '../../common/api/parcel/services/ParcelService';
import {CrudPageable} from '../../../core/material/tables/dataModels/Pageable';
import {Parcel} from '../../common/api/parcel/dto/Parcel';
import {Observable, Subject} from 'rxjs';

@Component({
    selector: 'app-store-details',
    templateUrl: 'storeDetails.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class StoreDetailsComponent implements OnInit, OnDestroy {
    private parcelSubject: Subject<CrudPageable<Parcel>> = new Subject();

    constructor(private route: ActivatedRoute,
                private cdRef: ChangeDetectorRef,
                private parcelService: ParcelService) {
    }

    ngOnInit() {
        const sub = this.parcelService.getMany()
            .subscribe((res) => {
                this.parcelSubject.next(res);
                this.cdRef.markForCheck();
                sub.unsubscribe();
            });
    }

    ngOnDestroy(): void {
        this.parcelSubject.complete();
    }

    public getParcelStream(): Observable<CrudPageable<Parcel>> {
        return this.parcelSubject.asObservable();
    }
}
