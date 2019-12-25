import {Component, Inject, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ThingAttributeService} from '../../../common/api/thing/services/ThingAttributeService';
import {ThingTypeAttribute} from '../../../common/api/thing/dto/ThingTypeAttribute';
import * as _ from 'lodash';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {finalize, map} from 'rxjs/operators';
import {Thing} from '../../../common/api/thing/dto/Thing';
import {Observable} from 'rxjs';
import {ThingType} from '../../../common/api/thing/dto/ThingType';
import {ThingTypeService} from '../../../common/api/thing/services/ThingTypeService';

@Component({
    selector: 'app-create-attribute-dialog',
    templateUrl: 'createDialog.html',
})

export class CreateThingTypeDialogComponent implements OnInit {
    public formGroup: FormGroup;
    public availableAttributeStream: Observable<ThingTypeAttribute[]>;
    public attributes: FormArray;
    public isLoading = false;

    constructor(private fb: FormBuilder,
                @Inject(MAT_DIALOG_DATA) public data: { item: ThingType },
                private thingTypeService: ThingTypeService,
                private thingAttributeService: ThingAttributeService,
                private dialogRef: MatDialogRef<CreateThingTypeDialogComponent>) {
    }

    ngOnInit() {
        this.availableAttributeStream = this.thingAttributeService
            .getMany({select: ['id', 'key', 'type']})
            .pipe(map((res) => res.data));

        this.buildForm();
    }


    public submit() {
        if (this.formGroup.valid) {
            this.isLoading = true;
            const payload = this.formGroup.getRawValue() as ThingType;
            this.availableAttributeStream.subscribe((availableAttrs) => {
                payload.attributes = _.map(payload.attributes, (attr) => {
                    const existingAttribute = _.find(availableAttrs, e => e.key === attr.key);

                    if (!attr.id) {

                        attr = _.omit(attr, 'id');
                    }
                    return attr;
                });

                this.createOrUpdate(payload);
            });

        }
    }

    public addAttribute() {
        this.attributes.push(this.createAttributeFormGroup());
    }

    public removeAttribute(index: number) {
        this.attributes.removeAt(index);
    }

    public onAttributeSelected(selectedAttribute: ThingTypeAttribute, controlIndex) {
        const attribute = (this.formGroup.get('attributes') as FormArray).at(controlIndex);
        attribute.get('type').setValue(selectedAttribute.type);
        attribute.get('id').setValue(selectedAttribute.id);
    }

    private createAttributeFormGroup(attribute?: ThingTypeAttribute): FormGroup {
        return this.fb.group({
            id: _.get(attribute, 'id') || '',
            key: [_.get(attribute, 'key') || '', Validators.required],
            type: [_.get(attribute, 'type') || '', Validators.required]
        });
    }

    private buildForm() {
        const attributes = this.data.item ?
            _.map(this.data.item.attributes, (attr) => this.createAttributeFormGroup(attr)) : [];
        this.formGroup = this.fb.group(
            {
                name: [_.get(this.data, 'item.name') || '', Validators.required],
                icon: [_.get(this.data, 'item.icon') || '', Validators.required],
                attributes: this.fb.array(attributes)
            }
        );
        this.attributes = this.formGroup.get('attributes') as FormArray;
    }

    private createOrUpdate(payload: Thing) {
        const createOrUpdateStream = this.data.item ?
            this.thingTypeService.update(this.data.item.id, payload) : this.thingTypeService.create(payload);

        createOrUpdateStream
            .pipe(finalize(() => this.isLoading = false))
            .subscribe(() => {
                this.dialogRef.close(true);
            });
    }
}
