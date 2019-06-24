import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ThingService} from '../../common/api/thing/services/ThingService';
import {ThingTypeService} from '../../common/api/thing/services/ThingTypeService';
import {Observable} from 'rxjs';
import {ThingType} from '../../common/api/thing/dto/ThingType';
import {ThingAttributeService} from '../../common/api/thing/services/ThingAttributeService';
import {ThingAttribute} from '../../common/api/thing/dto/ThingAttribute';
import * as _ from 'lodash';
import {Thing} from '../../common/api/thing/dto/Thing';
import {MatDialogRef} from '@angular/material';
import {finalize} from 'rxjs/operators';

@Component({
    selector: 'app-create-thing-dialog',
    templateUrl: 'createThing.html',
})

export class CreateThingDialogComponent implements OnInit {
    public createThingForm: FormGroup;
    public availableThingTypesStream: Observable<ThingType[]>;
    public availableAttributeStream: Observable<ThingAttribute[]>;
    public attributes: FormArray;
    public isLoading = false;

    constructor(private fb: FormBuilder,
                private thingService: ThingService,
                private dialogRef: MatDialogRef<CreateThingDialogComponent>,
                private thingAttributeService: ThingAttributeService,
                private thingTypeService: ThingTypeService) {
    }

    ngOnInit() {
        this.availableThingTypesStream = this.thingTypeService.getMany();
        this.availableAttributeStream = this.thingAttributeService
            .getMany({select: ['id', 'key', 'type']});

        this.createThingForm = this.fb.group(
            {
                name: ['', Validators.required],
                type: ['', Validators.required],
                attributes: this.fb.array([])
            }
        );
        this.attributes = this.createThingForm.get('attributes') as FormArray;
    }

    public submit() {
        if (this.createThingForm.valid) {
            this.isLoading = true;
            const payload = this.createThingForm.getRawValue() as Thing;

            payload.attributes = _.map(payload.attributes, (attr) => {
                console.log(attr);
                if (!attr.id) {
                    attr = _.omit(attr, 'id');
                }
                return attr;
            });
            _.set(payload, 'type.id', _.get(payload, 'type'));
            this.thingService.create(payload)
                .pipe(finalize(() => this.isLoading = false))
                .subscribe(() => {
                    this.dialogRef.close(true);
                });
        }
    }

    public addAttribute() {
        this.attributes.push(this.createAttributeFormGroup());
    }

    public removeAttribute(index: number) {
        this.attributes.removeAt(index);
    }

    onAttributeSelected(selectedAttribute: ThingAttribute, controlIndex) {
        const attribute = (this.createThingForm.get('attributes') as FormArray).at(controlIndex);
        attribute.get('type').setValue(selectedAttribute.type);
        attribute.get('id').setValue(selectedAttribute.id);
    }

    private createAttributeFormGroup(): FormGroup {
        return this.fb.group({
            id: '',
            key: ['', Validators.required],
            type: ['', Validators.required]
        });
    }
}
