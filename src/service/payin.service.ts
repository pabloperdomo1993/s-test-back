import { Injectable } from '@nestjs/common';
import { HttpResourceService } from './http-resource.service';
import { ConfigService } from '@nestjs/config';
import { AuthService } from './auth.service';
import { payinPaymentCreateI } from 'src/interface/payin.payment.create.interface';
import { authClientI } from 'src/interface/auth.client.interface';

@Injectable()
export class PayinService {
    constructor(
        private readonly httpResouceService: HttpResourceService,
        private readonly configService: ConfigService,
        private readonly authService: AuthService
    ) {}
    
    async paymentCreate(request: payinPaymentCreateI & authClientI): Promise<any> {
        const credentials = {
            clientId: request.clientId,
            clientSecret: request.clientSecret,
            id: request.id
        };

        const data = await this.authService.authClient(credentials);

        const X_API_TYPE = this.configService.get<string>('X_API_TYPE');
        const API_URL_BASE_SUPRA = this.configService.get<string>('API_URL_BASE_SUPRA');
        const client = await this.authService.authClientById(request.id);

        const body = {
            "currency": request.currency,
            "amount": request.amount,
            "referenceId": client.referenceId,
            "documentType": client.documentType,
            "email": client.email,
            "cellPhone": client.cellPhone,
            "document": client.document,
            "fullName": client.fullName,
            "description": client.description,
            "redirectUrl": request.redirectUrl,
            "quoteId": request.quoteId
        };

        const HEADERS = {
            'x-api-type': X_API_TYPE,
             Authorization: `Bearer ${data.token}`
        };

        const response = await this.httpResouceService.callPost(`${API_URL_BASE_SUPRA}/v1/payin/payment`, body, HEADERS);

        return response.data;
    }

    async paymentById(id: string, body: authClientI): Promise<any> {
        const credentials = {
            clientId: body.clientId,
            clientSecret: body.clientSecret,
            id: body.id
        };

        const data = await this.authService.authClient(credentials);

        const X_API_TYPE = this.configService.get<string>('X_API_TYPE');
        const API_URL_BASE_SUPRA = this.configService.get<string>('API_URL_BASE_SUPRA');

        const HEADERS = {
            'x-api-type': X_API_TYPE,
             Authorization: `Bearer ${data.token}`
        };

        const response = await this.httpResouceService.callGet(`${API_URL_BASE_SUPRA}/v1/payin/payment/${id}`, HEADERS);

        return response.data;
    }
}
