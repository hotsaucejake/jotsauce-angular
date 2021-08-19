import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from 'src/app/core/authentication/authentication.service';
import { AccountAvailability } from 'src/app/core/interfaces/authentication/account-availability.interface';
import { Register } from 'src/app/core/interfaces/authentication/register.interface';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [AuthService]
})
export class RegisterComponent implements OnInit {

  public componentIsLoading = false;

  public registerModel = {} as Register;
  public accountAvailability = {} as AccountAvailability;

  public usernameAvailable = false;
  public emailAvailable = false;
  public passwordValid = false;
  public confirmPasswordValid = false;

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router,
    private readonly toastr: ToastrService) { }

  public ngOnInit(): void {

    if (AuthenticationService.isAuthenticated()) {
      this.router.navigate(['/'], { replaceUrl: true });
    }

  }


  public async register(f: FormGroup): Promise<void> {

    if (f.valid) {

      if (this.stringsMatch(f.value.password, f.value.passwordConfirmation)) {
        f.controls[`passwordConfirmation`].setErrors({ mustMatch: false });
        this.componentIsLoading = true;

        const response = await this.authService.register(this.registerModel);
        if (response.type === 'data') {
          localStorage.setItem('email_or_username', response.data.username);
          this.router.navigate(['auth/login'], { replaceUrl: true });
        } else {
          response.errors?.forEach(error => {
            this.toastr.error(error.error, error.name.toUpperCase());
          });
        }

        this.componentIsLoading = false;
      } else {
        f.controls[`passwordConfirmation`].setErrors({ mustMatch: true });
      }

    }
  }


  public async checkUsernameAvailability(f: FormGroup): Promise<void> {
    if (f.controls[`username`].valid) {
      this.accountAvailability.username = this.registerModel.username;
      const checkUsernameResponse = await this.authService.checkUsernameAvailability(this.accountAvailability);
      if (checkUsernameResponse.type === 'data') {
        this.usernameAvailable = checkUsernameResponse.data;
      } else {
        f.controls[`username`].setErrors({ usernameTaken: true });
        checkUsernameResponse.errors?.forEach(error => {
          this.toastr.error(error.error, error.name.toUpperCase());
        });
      }
    }
  }


  public async checkEmailAvailability(f: FormGroup): Promise<void> {
    if (f.controls[`email`].valid) {
      this.accountAvailability.email = this.registerModel.email;
      const checkEmailResponse = await this.authService.checkEmailAvailability(this.accountAvailability);
      if (checkEmailResponse.type === 'data') {
        this.emailAvailable = checkEmailResponse.data;
      } else {
        f.controls[`email`].setErrors({ emailTaken: true });
        checkEmailResponse.errors?.forEach(error => {
          this.toastr.error(error.error, error.name.toUpperCase());
        });
      }
    }
  }


  public checkPasswordValid(f: FormGroup): void {
    if (f.controls[`password`].valid) {
      this.passwordValid = true;
    }
  }


  public checkConfirmPasswordValid(f: FormGroup): void {
    if (f.controls[`passwordConfirmation`].valid && this.stringsMatch(f.value.password, f.value.passwordConfirmation)) {
      this.confirmPasswordValid = true;
    }
  }


  private stringsMatch(str1: string, str2: string): boolean {
    return str1 === str2;
  }

}
