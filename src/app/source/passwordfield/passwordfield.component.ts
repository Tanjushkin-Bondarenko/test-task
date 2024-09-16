
import { Component, } from '@angular/core';
import {  FormGroup, Validators, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-passwordfield',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './passwordfield.component.html',
  styleUrl: './passwordfield.component.css'
})

export class PasswordfieldComponent {
  title = 'testTaskAngular';
  registerForm: FormGroup;
  levelOfValidity: string ='empty';

  constructor( private fb: FormBuilder){
    this.registerForm =  this.fb.group({
        login: [
          "",
           Validators.required
          ],
        password: [
          "", 
          [
          Validators.required, 
          Validators.minLength(8),
          ]],
      })

 this.registerForm.get('password')?.valueChanges.subscribe((value: string) =>{
  
  this.passwordValidator(value)
  });
};
passwordValidator(password: string){ 
if(!password){
   this.levelOfValidity="empty"
}else if(password.length<8){
 this.levelOfValidity = "tooShort"
}else{
  const hasLetters = /[a-zA-Z]/.test(password);
  const hasNumbers = /\d/.test(password);
  const hasSymbols = /[!@#$%^&*(),.?":{}|<>]/.test(password)
   
  if((hasLetters && !hasNumbers && !hasSymbols) || (!hasLetters && hasNumbers && !hasSymbols) || (!hasLetters && !hasNumbers && hasSymbols)){
  this.levelOfValidity = "easy"
  }else if((hasLetters && hasNumbers && !hasSymbols) || (!hasLetters && hasNumbers && hasSymbols) || (hasLetters && !hasNumbers && hasSymbols)){
   this.levelOfValidity = "medium"
  }else if((hasLetters && hasNumbers && hasSymbols)){
    this.levelOfValidity = "strong"
  }
}
}
}

