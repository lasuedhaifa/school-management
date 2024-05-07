import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import {  FormBuilder, FormGroup, Validators } from '@angular/forms';
import { File } from 'src/app/demo/api/file';

@Component({
    templateUrl: './subject-add.component.html',
    styleUrls: ['./subject-add.component.scss']
})
export class SubjectAddComponent  implements OnInit{
 
    myForm!: FormGroup; 
    formErrors: { [key: string]: string } = {
        'subjectName': '',
      };
      validationMessages: { [key: string]: { [key: string]: string } } = {
        'subjectName': {
          'required': 'Le nom de matiere est requis.'
        },
      };
    
    
      constructor(private formBuilder: FormBuilder) { }
    
      ngOnInit(): void {
        this.myForm = this.formBuilder.group({
          subjectName: ['', Validators.required],
        });
    
        this.myForm.valueChanges.subscribe(() => this.onValueChanged());
      }
     
      onSubmit() {
        let errorMessage = "Veuillez corriger les erreurs de saisie :\n";
        let errorCount = 0;
      
        for (const field of Object.keys(this.formErrors)) {
          const control = this.myForm.get(field);
      console.log(control , "control")
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
          // Envoyer le formulaire ou effectuer d'autres actions nécessaires
          console.log(this.myForm.value);
        }
      }
      
      
    
      onValueChanged() {
        for (const field in this.formErrors) {
          if (Object.prototype.hasOwnProperty.call(this.formErrors, field)) {
            // Clear previous error message
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