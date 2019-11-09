import {Component, Inject, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';
import {ThingService} from '../../../common/api/thing/services/ThingService';
import * as _ from 'lodash';
import {Thing} from '../../../common/api/thing/dto/Thing';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {finalize} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {ThingType} from '../../../common/api/thing/dto/ThingType';
import {ThingTypeService} from '../../../common/api/thing/services/ThingTypeService';
import {ThingTypeAttribute} from '../../../common/api/thing/dto/ThingTypeAttribute';

@Component({
    selector: 'app-create-thing-dialog',
    templateUrl: 'createPost.html',
})

export class CreatePostDialogComponent implements OnInit {
    public createThingForm: FormGroup;
    public attributes: FormArray;
    public isLoading = false;
    public attributesStream: Observable<ThingTypeAttribute[]>;
    private availableAttributes: ThingTypeAttribute[];

    constructor(private fb: FormBuilder,
                @Inject(MAT_DIALOG_DATA) public data: { additionalData: ThingType, item?: Thing },
                private thingService: ThingService,
                private thingTypeService: ThingTypeService,
                private dialogRef: MatDialogRef<CreatePostDialogComponent>) {
    }

    ngOnInit() {
        this.buildForm();
    }


    public submit() {

        if (this.createThingForm.valid) {
            this.isLoading = true;
            let payload = this.createThingForm.getRawValue();
            const attributeValues = _.map(payload.attributes, (attr) => {
                attr.value = {
                    value: attr.value,
                    id: 3
                };
                return attr;
            });
            payload.type.attributes = attributeValues;
            payload = _.omit(payload, 'attributes');

            if (!this.data.item) {
                payload = _.omit(payload, 'id');
            }
            console.log(payload);
            this.createOrUpdate(payload);
        }
    }

    private buildForm() {
        console.log(this.data);
        this.availableAttributes =
            _.get(this.data, 'item.type.attributes') || this.data.additionalData.attributes;
        const attributeFormGroup =
            _.map(this.availableAttributes, attr => this.createAttributeFormGroup(attr));
        this.createThingForm = this.fb.group(
            {
                id: [_.get(this.data, 'item.id') || null],
                name: [_.get(this.data, 'item.name') || ''],
                type: [_.get(this.data, 'item.type') || this.data.additionalData],
                attributes: this.fb.array(attributeFormGroup)
            }
        );
    }

    private createAttributeFormGroup(attribute?: ThingTypeAttribute): FormGroup {
        return this.fb.group({
            id: _.get(attribute, 'id') || '',
            key: [_.get(attribute, 'key') || ''],
            type: [_.get(attribute, 'type') || ''],
            value: [_.get(attribute, 'value') || '']
        });
    }

    private createOrUpdate(payload: Thing) {
        const createOrUpdateStream = this.data.item ?
            this.thingService.update(this.data.item.id, payload) : this.thingService.create(payload);

        createOrUpdateStream
            .pipe(finalize(() => this.isLoading = false))
            .subscribe(() => {
                this.dialogRef.close(true);
            });
    }
}
