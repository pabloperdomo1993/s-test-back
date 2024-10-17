import { Injectable } from '@nestjs/common';
import { HttpResourceService } from './http-resource.service';
import { ConfigService } from '@nestjs/config';
import { AuthService } from './auth.service';
import { payinPaymentCreateI } from 'src/interface/payin.payment.create.interface';

@Injectable()
export class PayinService {
    constructor(
        private readonly httpResouceService: HttpResourceService,
        private readonly configService: ConfigService,
        private readonly authService: AuthService
    ) {}
    
    async paymentCreate(request: payinPaymentCreateI): Promise<any> {
        const credentials = {
            clientId: "c859cd16-9dee-4c7b-a230-bf2c6f055cd3",
            clientSecret: "ClientSecret"
        };

        const data = await this.authService.authClient(credentials);

        const X_API_TYPE = this.configService.get<string>('X_API_TYPE');
        const API_URL_BASE_SUPRA = this.configService.get<string>('API_URL_BASE_SUPRA');

        const body = {
            "currency": request.currency,
            "amount": request.amount,
            "referenceId": "ABC456789",
            "documentType": "CC",
            "email": "user@example.com",
            "cellPhone": "+573115268974",
            "document": "123456789",
            "fullName": "John Doe",
            "description": "Supra Payment",
            "redirectUrl": "https://example.com/redirect",
            "quoteId": request.quoteId
        };

        const HEADERS = {
            'x-api-type': X_API_TYPE,
             Authorization: `Bearer ${data.token}`
        };

        const response = await this.httpResouceService.callPost(`${API_URL_BASE_SUPRA}/v1/payin/payment`, body, HEADERS);

        return response.data;
    }

    paymentById(): any {
        return '';
    }
}
