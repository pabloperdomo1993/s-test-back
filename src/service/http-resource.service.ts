import { Injectable } from '@nestjs/common';
import axios, { AxiosResponse } from 'axios';

@Injectable()
export class HttpResourceService {
    constructor() { }

    callPost(url: string, data: any, headers: any): Promise<AxiosResponse> {
        return axios.post(url, data, { headers: headers});
    }
}
