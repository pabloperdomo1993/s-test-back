import { Injectable } from '@nestjs/common';
import { authClientI } from 'src/interface/auth.client.interface';
import { HttpResourceService } from './http-resource.service';
import { authTokenI } from 'src/interface/auth.token.interface';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
    constructor(
        private readonly httpResouceService: HttpResourceService,
        private readonly configService: ConfigService
    ) {}

    async authClient(client: authClientI): Promise<authTokenI> {
        const X_API_TYPE = this.configService.get<string>('X_API_TYPE');
        const API_URL_BASE_SUPRA = this.configService.get<string>('API_URL_BASE_SUPRA');

        const BODY = {
            clientId: client.clientId,
            clientSecret: client.clientSecret
        };

        const HEADERS = {
            'x-api-type': X_API_TYPE
        };

        const response = await this.httpResouceService.callPost(`${API_URL_BASE_SUPRA}/v1/auth/token`, BODY, HEADERS);

        return response.data;
    }
}
