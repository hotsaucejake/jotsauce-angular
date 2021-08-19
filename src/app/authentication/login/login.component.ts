import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from 'src/app/core/authentication/authentication.service';
import { UserCredentials } from 'src/app/core/interfaces/authentication/user-credentials.interface';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.scss'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {

  public componentIsLoading = false;

  public userCredentials: UserCredentials = {
    email_or_username: localStorage.getItem('email_or_username') ?? '',
    password: ''
  };

  public remember = false;


  constructor(
    private readonly authService: AuthService,
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly toastr: ToastrService
  ) { }


  public ngOnInit(): void {

    if (AuthenticationService.isAuthenticated()) {
      this.router.navigate(['/'], { replaceUrl: true });
    }

    this.remember = !!localStorage.getItem('email_or_username');

  }


  public async login(f: FormGroup): Promise<void> {

    if (f.valid) {
      this.componentIsLoading = true;

      const response = await this.authService.login(this.userCredentials, this.remember);
      if (response.type === 'data') {
        this.router.navigate(['/'], { replaceUrl: true });
      } else {
        response.errors?.forEach(error => {
          this.toastr.error(error.error, error.name.toUpperCase());
        });
      }

      this.componentIsLoading = false;
    }

  }
}
