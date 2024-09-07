import { Component } from '@angular/core';
import { ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

export function PasswordFieldEmpty(): ValidatorFn{
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
  selector: 'app-passwordfieldempty',
  standalone: true,
  imports: [],
  templateUrl: './passwordfieldempty.component.html',
  styleUrl: './passwordfieldempty.component.css'
})
export class PasswordfieldemptyComponent {

}
