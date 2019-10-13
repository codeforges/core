import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {AttributeTypes} from '../../api/thing/dto/AttributeTypes';
import * as _ from 'lodash';
import {Subscription} from 'rxjs';

@Component({
    selector: 'cf-attr-select',
    templateUrl: 'cfAttrTypeSelect.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class CFAttrTypeSelectComponent implements OnInit, OnDestroy {
    @Input() fullWidth = true;
    @Input() attributeType: AttributeTypes;
    @Output() attributeTypesChange = new EventEmitter<AttributeTypes>();

    public attrTypes = _.map(AttributeTypes, (t) => t);
    public attributeFormControl = new FormControl('', [Validators.required]);

    private sub: Subscription;

    ngOnInit() {
        this.sub = this.attributeFormControl.valueChanges
            .subscribe((value) => this.attributeTypesChange.emit(value));
    }

    ngOnDestroy(): void {
        if (this.sub) {
            this.sub.unsubscribe();
        }
    }
}
