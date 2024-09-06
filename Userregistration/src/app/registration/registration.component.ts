import { Component } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {
  user = {
    firstName: 'Sameer',
    lastName: 'Mansuri',
    mob : '1234567890',
    email: 'sameer@gmail.com',
    password: 'sam@1999'
  };

  onSubmit() {
    console.log('Form submitted', this.user);
  }
}