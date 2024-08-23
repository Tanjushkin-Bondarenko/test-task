import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './passwordfield/app.config';
import { AppComponent } from './passwordfield/passwordfield.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
