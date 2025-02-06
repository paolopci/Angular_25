import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {


  formSubmitted: boolean = false;
  nm: string = '';
  em: string = '';
  emailIsValid: boolean = false;
  nameIsValid: boolean = false;

  checkEmailIsValid(em: string): void {
    if (em.includes('@') && (em.endsWith('.com') || em.endsWith('.it'))) {
      this.emailIsValid = true;
    } else {
      this.emailIsValid = false;
    }
  }

  disableBtn() {
    if (this.nm != null) {
      this.nameIsValid = true;
    } else {
      this.nameIsValid = false;
    }
    if (this.nameIsValid === true && this.emailIsValid === true) {
      return false;
    }
    return true;
  }

  showMessage() {
    this.formSubmitted = true;
  }
}
