import { Component } from '@angular/core';
import { ValidatorFn, AbstractControl, ValidationErrors, FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { PasswordFieldEmpty } from '../passwordfieldempty/passwordfieldempty.component';

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
      }
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

@Component({
  selector: 'app-passwordfield',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './passwordfield.component.html',
  styleUrl: './passwordfield.component.css'
})

export class PasswordfieldComponent {
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
           PasswordFieldEmpty(),
            Validators.pattern(/\D\d/)]),
           
        
      }
  )}

   
  onSubmit():void{
    this.isSubmitted = true
  }

}
