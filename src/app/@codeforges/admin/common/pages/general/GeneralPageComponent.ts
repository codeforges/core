import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'cf-general-page',
    templateUrl: 'generalPage.html'
})

export class GeneralPageComponent implements OnInit {
    @Input() isCard = true;

    constructor() {
    }

    ngOnInit() {
    }
}
