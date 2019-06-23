import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ThingService} from '../../common/api/thing/services/ThingService';
import {ThingTypeService} from '../../common/api/thing/services/ThingTypeService';
import {Observable} from 'rxjs';
import {ThingType} from '../../common/api/thing/dto/ThingType';

@Component({
    selector: 'app-create-thing-dialog',
    templateUrl: 'createThing.html',
})

export class CreateThingDialogComponent implements OnInit {
    public createThingForm: FormGroup;
    public availableThingTypesStream: Observable<ThingType[]>;
    public attributes: FormArray;

    constructor(private fb: FormBuilder,
                private thingService: ThingService,
                private thingTypeService: ThingTypeService) {
    }

    ngOnInit() {
        this.availableThingTypesStream = this.thingTypeService.getMany();
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
        console.log(this.createThingForm);
    }

    public addAttribute() {
        this.attributes.push(this.createAttributeFormGroup());
    }

    public removeAttribute(index: number) {
        this.attributes.removeAt(index);
    }

    private createAttributeFormGroup(): FormGroup {
        return this.fb.group({
            key: '',
            value: ''
        });
    }
}
