import { BaseService } from './_base.service';
import { ServiceResponse } from './models/service-response.interface';
import { Injectable } from '@angular/core';
import { FormElement } from '../interfaces/form-element.interface';

@Injectable({ providedIn: 'root' })
export class FormElementService extends BaseService {

  public async getFormElements(): Promise<ServiceResponse<FormElement[]>> {
    const response = this.getAsync<FormElement[]>(`api/form-element`);

    return response;
  }

}
