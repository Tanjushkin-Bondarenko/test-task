import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PasswordfieldComponent } from "./source/passwordfield/passwordfield.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PasswordfieldComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = "test task for Usense"
  
}
