import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
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
                attributes: this.fb.array([this.createAttributeFormGroup()])
            }
        );
    }

    private createAttributeFormGroup(): FormGroup {
        return this.fb.group({
            key: '',
            value: ''
        });
    }
}
