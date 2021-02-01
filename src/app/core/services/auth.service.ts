import { Injectable } from '@angular/core';
import { AuthenticationService } from '../authentication/authentication.service';
import { AccountAvailability } from '../interfaces/authentication/account-availability.interface';
import { AuthenticationResponse } from '../interfaces/authentication/authentication-response.interface';
import { Register } from '../interfaces/authentication/register.interface';
import { UserCredentials } from '../interfaces/authentication/user-credentials.interface';
import { User } from '../interfaces/user.interface';
import { ServiceResponse } from './models/service-response.interface';
import { BaseService } from './_base.service';


@Injectable({ providedIn: 'root' })
export class AuthService extends BaseService {

    private async csrfCookie(): Promise<void> {
        const response = await this.getAsync('sanctum/csrf-cookie');
    }

    public async login(authModel: UserCredentials, remember: boolean): Promise<ServiceResponse<AuthenticationResponse>> {
        this.csrfCookie();
        const response = await this.postAsync<AuthenticationResponse>('api/auth/login', authModel);

        if (response.type === 'data') {
            AuthenticationService.setAuthentication(response.data, remember);
        }

        if (remember && authModel.email) {
            localStorage.setItem('email', authModel.email);
        } else {
            localStorage.removeItem('email');
        }

        return response;
    }


    public async logout(): Promise<ServiceResponse<void>> {

        const response = await this.getAsync<void>('api/auth/logout');
        AuthenticationService.clearAuthentication();

        return response;
    }


    public async register(registerModel: Register): Promise<ServiceResponse<User>> {
        const response = this.postAsync<User>(`api/auth/register`, registerModel);

        return response;
    }


    public async checkUsernameAvailability(accountAvailability: AccountAvailability): Promise<ServiceResponse<boolean>> {
        const response = this.postAsync<boolean>(`api/auth/username-availability`, accountAvailability);

        return response;
    }


    public async checkEmailAvailability(accountAvailability: AccountAvailability): Promise<ServiceResponse<boolean>> {
        const response = this.postAsync<boolean>(`api/auth/email-availability`, accountAvailability);

        return response;
    }

}
