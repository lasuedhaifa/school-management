import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import {  FormBuilder, FormGroup, Validators } from '@angular/forms';
import { File } from 'src/app/demo/api/file';

@Component({
    templateUrl: './tutor-add.component.html',
    styleUrls: ['./tutor-add.component.scss']
})
export class TutorAddComponent  implements OnInit{
 
  myForm!: FormGroup; 
  formErrors: { [key: string]: string } = {
        'firstName': '',
        'lastName': '',
        'phone': '',
        'email': '',
        'date': '',
        'classe': ''
      };
      validationMessages: { [key: string]: { [key: string]: string } } = {
        'firstName': {
          'required': 'Le prénom est requis.'
        },
        'lastName': {
          'required': 'Le nom de famille est requis.'
        },
        'phone': {
          'required': 'Le numéro de téléphone est requis.',
          'pattern': 'Le numéro de téléphone doit contenir uniquement des chiffres et ne doit pas dépasser 8 chiffres.'
        },
        'email': {
          'required': 'L\'adresse e-mail est requise.',
          'email': 'L\'adresse e-mail doit être valide.'
        },
        'date': {
          'required': 'La date est requise.',
          'pattern': 'Le format de la date doit être YYYY-MM-DD.'
        },
        'classe': {
          'required': 'La classe est requise.'
        }
      };
    
    
      constructor(private formBuilder: FormBuilder) { }
    
      ngOnInit(): void {
        this.myForm = this.formBuilder.group({
          firstName: ['', Validators.required],
          lastName: ['', Validators.required],
          phone: ['', [Validators.required, Validators.pattern('^[0-9]{1,8}$')]],
          email: ['', [Validators.required, Validators.email]],
          date: ['', [Validators.required, Validators.pattern(/^\d{4}-\d{2}-\d{2}$/)]],
          classe: ['', Validators.required]
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