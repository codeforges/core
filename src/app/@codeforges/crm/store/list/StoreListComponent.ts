import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-store-list',
    templateUrl: 'storeList.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class StoreListComponent implements OnInit {
    constructor() {
    }

    ngOnInit() {
    }
}
