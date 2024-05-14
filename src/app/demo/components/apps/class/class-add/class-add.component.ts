import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './class-add.component.html',
  styleUrls: ['./class-add.component.scss']
})
export class ClassAddComponent implements OnInit {
  myForm!: FormGroup;
  formErrors: { [key: string]: string } = {
    'classLevel': '',
    'studentNumber': '',
    'teacherNumber': ''
  };

  validationMessages: { [key: string]: { [key: string]: string } } = {
    'classLevel': {
      'required': 'Class Level is required.'
    },
    'studentNumber': {
      'required': 'Number of students is required.'
    },
    'teacherNumber': {
      'required': 'Number of teachers is required.'
    }
  };

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      classLevel: ['', Validators.required],
      studentNumber: ['', Validators.required],
      teacherNumber: ['', Validators.required],
      subject: [[]] // assuming it's a multi-select and you're storing multiple values
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
