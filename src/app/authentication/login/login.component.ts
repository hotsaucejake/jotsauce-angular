import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  constructor() { }

  loginform = true;
  recoverform = false;

  showRecoverForm(): void {
    this.loginform = !this.loginform;
    this.recoverform = !this.recoverform;
  }
}
