import {Component, Inject, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ThingService} from '../../../common/api/thing/services/ThingService';
import {ThingTypeService} from '../../../common/api/thing/services/ThingTypeService';
import {Observable} from 'rxjs';
import {ThingType} from '../../../common/api/thing/dto/ThingType';
import {ThingAttributeService} from '../../../common/api/thing/services/ThingAttributeService';
import {ThingTypeAttribute} from '../../../common/api/thing/dto/ThingTypeAttribute';
import * as _ from 'lodash';
import {Thing} from '../../../common/api/thing/dto/Thing';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {finalize} from 'rxjs/operators';

@Component({
    selector: 'app-create-thing-dialog',
    templateUrl: 'createThing.html',
})
// TODO: selectable attributes based on type
export class CreateThingDialogComponent implements OnInit {
    public createThingForm: FormGroup;
    public availableThingTypesStream: Observable<ThingType[]>;
    public availableAttributeStream: Observable<ThingTypeAttribute[]>;
    public attributes: FormArray;
    public isLoading = false;

    constructor(private fb: FormBuilder,
                @Inject(MAT_DIALOG_DATA) public data: { item: Thing },
                private thingService: ThingService,
                private dialogRef: MatDialogRef<CreateThingDialogComponent>,
                private thingAttributeService: ThingAttributeService,
                private thingTypeService: ThingTypeService) {
    }

    ngOnInit() {
        this.availableThingTypesStream = this.thingTypeService.getMany();
        this.availableAttributeStream = this.thingAttributeService
            .getMany({select: ['id', 'key', 'type']});

        this.buildForm();
    }


    public submit() {
        if (this.createThingForm.valid) {
            this.isLoading = true;
            const payload = this.createThingForm.getRawValue() as Thing;

            _.set(payload, 'type.id', _.get(payload, 'type'));

            this.createOrUpdate(payload);
        }
    }


    private buildForm() {
        this.createThingForm = this.fb.group(
            {
                name: [_.get(this.data, 'item.name') || '', Validators.required],
                type: [_.get(this.data, 'item.type.id') || '', Validators.required],
            }
        );
        this.attributes = null;
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
