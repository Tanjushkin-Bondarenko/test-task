import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

export function PasswordValidator(): ValidatorFn {
  return(control: AbstractControl): ValidationErrors | null =>{
    const value = control.value;

    const hasLetterAndNumber = /\d\D/.test(value)
    const hasLetterAndSymbols = /\D[!@#$%^&*(),.?":{}|<>]/.test(value)
    const hasNumberAndSymbols = /\d[!@#$%^&*(),.?":{}|<>]/.test(value)
    const hasMinLength = value ? value.length >=8 : false
   
    let passwordMiddle
    if(hasLetterAndNumber && hasMinLength){
      passwordMiddle = hasLetterAndNumber&&hasMinLength; 
        passwordMiddle}
    if(hasLetterAndSymbols && hasMinLength){
      passwordMiddle = hasLetterAndSymbols && hasMinLength
    }
    if(hasNumberAndSymbols&&hasMinLength){
      passwordMiddle = hasNumberAndSymbols && hasMinLength
    }
    return !passwordMiddle ? {
      passwordAnother: {
        hasLetterAndNumber,
        hasLetterAndSymbols,
        hasMinLength,
        hasNumberAndSymbols
      }
    }: null
  } 

}
function PasswordFieldEnpty(): ValidatorFn{
  return(control: AbstractControl): ValidationErrors | null =>{
    const value = control.value;
    
    const notEmptyField = value.length >=1

    return !notEmptyField? {
        emptyField:{ 
        notEmptyField}
 }: null

  }
}
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule],
  templateUrl: './passwordfield.component.html',
  styleUrl: './passwordfield.component.css'
})

export class AppComponent {
  title = 'testTaskAngular';
  registerForm: FormGroup;
  isSubmitted = false;
  PasswordValidator!: ValidatorFn;

  constructor(){

    this.registerForm = new FormGroup(
      {
        login: new FormControl("", Validators.required),
        password: new FormControl("", [Validators.required, Validators.minLength(8),
           PasswordValidator(),
           PasswordFieldEnpty(),
            Validators.pattern(/\D\d/)]),
           
        
      }
  )}

   
  onSubmit():void{
   
    this.isSubmitted = true
  }

  
}
