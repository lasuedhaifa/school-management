import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-mark-add',
  templateUrl: './evaluation-add.component.html',
  styleUrls: ['./evaluation-add.component.scss']
})
export class EvaluationAddComponent implements OnInit {

  myForm!: FormGroup;
  formErrors: { [key: string]: string } = {
    'subjectName': '',
    'studentName': '',
    'mark': '',
    'termType': ''
  };

  validationMessages: { [key: string]: { [key: string]: string } } = {
    'subjectName': {
      'required': 'Subject Name is required.'
    },
    'studentName': {
      'required': 'Student Name is required.'
    },
    'mark': {
      'required': 'Mark is required.',
      'pattern': 'Mark should be a number.'
    },
    'termType': {
      'required': 'Term Type is required.'
    }
  };

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      subjectName: ['', Validators.required],
      studentName: ['', Validators.required],
      mark: ['', [Validators.required, Validators.pattern('^[0-9]+(\.[0-9]+)?$')]],
      termType: ['', Validators.required],
      observation: ['', Validators.required],

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
      // You can add code here to submit the form data
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
