import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ThingAttributeService} from '../../../common/api/thing/services/ThingAttributeService';
import {ThingTypeAttribute} from '../../../common/api/thing/dto/ThingTypeAttribute';
import * as _ from 'lodash';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {finalize} from 'rxjs/operators';

@Component({
    selector: 'app-create-attribute-dialog',
    templateUrl: 'createDialog.html',
})

export class CreateAttributeDialogComponent implements OnInit {
    public formGroup: FormGroup;
    public isLoading = false;

    constructor(private fb: FormBuilder,
                @Inject(MAT_DIALOG_DATA) public data: { item: ThingTypeAttribute },
                private attributeService: ThingAttributeService,
                private dialogRef: MatDialogRef<CreateAttributeDialogComponent>) {
    }

    ngOnInit() {
        this.buildForm();
    }


    public submit() {
        if (this.formGroup.valid) {
            this.isLoading = true;
            const payload = this.formGroup.getRawValue() as ThingTypeAttribute;
            this.createOrUpdate(payload);
        }
    }

    private buildForm() {
        this.formGroup = this.fb.group(
            {
                key: [_.get(this.data, 'item.key') || '', Validators.required],
                type: [_.get(this.data, 'item.type') || '', Validators.required],
            }
        );
    }

    private createOrUpdate(payload: ThingTypeAttribute) {
        const createOrUpdateStream = this.data.item ?
            this.attributeService.update(this.data.item.id, payload) : this.attributeService.create(payload);

        createOrUpdateStream
            .pipe(finalize(() => this.isLoading = false))
            .subscribe(() => {
                this.dialogRef.close(true);
            });
    }
}
