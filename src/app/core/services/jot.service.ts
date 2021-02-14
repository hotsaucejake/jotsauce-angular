import { BaseService } from './_base.service';
import { ServiceResponse } from './models/service-response.interface';
import { Injectable } from '@angular/core';
import { Jot } from '../interfaces/jot.interface';

@Injectable({ providedIn: 'root' })
export class JotService extends BaseService {

    public async getJots(): Promise<ServiceResponse<Jot[]>> {
        const response = this.getAsync<Jot[]>(`api/jot`);

        return response;
    }

    public async getJot(jot: string): Promise<ServiceResponse<Jot>> {
        const response = this.getAsync<Jot>(`api/jot/${jot}`);

        return response;
    }
}
