import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-parcel-edit',
    templateUrl: 'parcelEdit.html',
    styleUrls: ['parcelEdit.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class ParcelEditComponent implements OnInit {
    senders = [
        {
            id: '23',
            phone: '+3235645345',
            firstName: 'Ruben',
            lastName: 'Mosesian'
        }
    ];
    public parcelForm: FormGroup;
    public isCreatingNewSender = false;
    public isCreatingNewRetriever = false;
    public browserAutocompleteSalt = btoa(Math.random().toString(36));

    constructor(private fb: FormBuilder,
                private cdRef: ChangeDetectorRef) {
    }

    ngOnInit() {
        this.parcelForm = this.fb.group(
            {
                destination: this.fb.group({
                    address: ['', Validators.required],
                    city: ['', Validators.required],
                    country: ['', Validators.required],
                }),
                senderPhone: ['', Validators.required],
                retrieverPhone: ['', Validators.required],
                storage: ['', Validators.required]
            },
        );
    }

    public createSender() {
        this.isCreatingNewSender = true;
        this.createNewUserForm('newSender');
    }

    public createRetriever() {
        this.isCreatingNewRetriever = true;
        this.createNewUserForm('newRetriever');
    }

    private createNewUserForm(controlName: string) {
        this.parcelForm.addControl(controlName, this.fb.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            phone: ['', Validators.required]
        }));
        this.cdRef.detectChanges();
    }
}
