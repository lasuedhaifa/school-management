import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './module-add.component.html',
  styleUrls: ['./module-add.component.scss']
})
export class ModuleAddComponent implements OnInit {

  myForm!: FormGroup;
  formErrors: { [key: string]: string } = {
    'moduleName': '',
  };
  validationMessages: { [key: string]: { [key: string]: string } } = {
    'moduleName': {
      'required': 'Module Name is required.'
    },
  };

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      subjectName: ['', Validators.required],
      subject: ['', Validators.required] // You need to add form control for 'subject' as well
    });

    this.myForm.valueChanges.subscribe(() => this.onValueChanged());
  }

  onSubmit() {
    let errorMessage = "Please correct the following errors:\n";
    let errorCount = 0;

    for (const field of Object.keys(this.formErrors)) {
      const control = this.myForm.get(field);

      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key of Object.keys(control.errors || {})) {
          errorMessage += `- ${messages[key]}\n`;
          errorCount++;
        }
      }
    }

    if (errorCount > 0) {
      alert(errorMessage);
    } else {
      console.log(this.myForm.value);
      // You can submit the form or perform other necessary actions here
    }
  }

  onValueChanged() {
    for (const field in this.formErrors) {
      if (Object.prototype.hasOwnProperty.call(this.formErrors, field)) {
        this.formErrors[field] = '';
        const control = this.myForm.get(field);

        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          for (const key in control.errors) {
            if (Object.prototype.hasOwnProperty.call(control.errors, key)) {
              this.formErrors[field] += messages[key] + ' ';
            }
          }
        }
      }
    }
  }
}
