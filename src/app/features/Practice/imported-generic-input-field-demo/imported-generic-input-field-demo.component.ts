import { Component, OnInit } from '@angular/core';
import { GenericInputModel } from '../../../core/models/GenericInputModel';
import { CommonModule } from '@angular/common';
import { GenericInputComponent } from '../../../shared/components/generic-input/generic-input.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-imported-generic-input-field-demo',
  standalone: true,
  imports: [CommonModule,GenericInputComponent, ReactiveFormsModule],
  templateUrl: './imported-generic-input-field-demo.component.html',
  styleUrls: ['./imported-generic-input-field-demo.component.css']
})

export class ImportedGenericInputFieldDemoComponent {

  form = new FormGroup({});

  inputConfigs: GenericInputModel[] = [
    // Example inputs -- use your full config array here
    {
      id: 'username',
      name: 'username',
      type: 'text',
      label: 'Username',
      placeholder: 'Enter username',
      required: true,
      minlength: 4,
      maxlength: 12,
      value: '',
      validations: [
        { type: 'pattern', value: '^[a-zA-Z0-9]+$', message: 'Only letters and numbers allowed.' }
      ]
    },
    {
      id: 'email',
      type: 'email',
      label: 'Email',
      required: true,
      value: '',
      errorText: '',
      validations: [
        { type: 'pattern', value: '^.+@.+\\..+$', message: 'Invalid email format.' }
      ]
    },
    // ...add all your other configs here
  ];

  ngOnInit() {
    // Build form controls for each input config
    for (const config of this.inputConfigs) {
      if (config.type !== 'hidden' && config.type !== 'button') {
        const validatorsArr = [];
        if (config.required) validatorsArr.push(Validators.required);
        if (config.minlength) validatorsArr.push(Validators.minLength(config.minlength));
        if (config.maxlength) validatorsArr.push(Validators.maxLength(config.maxlength));
        if (config.pattern) validatorsArr.push(Validators.pattern(config.pattern));
        if (config.type === 'email') validatorsArr.push(Validators.email);
        // Add more validators as needed

        this.form.addControl(config.id?? '', new FormControl(config.value, validatorsArr));
      }
    }
  }

  onValueChange(id: string, value: any) {
    this.form.get(id)?.setValue(value, { emitEvent: false });
    this.form.get(id)?.markAsTouched();
  }

  submitForm() {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      alert('Form submitted!\n' + JSON.stringify(this.form.value, null, 2));
    } else {
      alert('Form has errors. Please fix them.');
    }
  }
}