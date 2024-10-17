import { Injectable } from '@nestjs/common';
import { HttpResourceService } from './http-resource.service';
import { ConfigService } from '@nestjs/config';
import { AuthService } from './auth.service';
import { exchangeQuoteCreateI } from 'src/interface/exchange.quote.create.interface';

@Injectable()
export class ExchangeService {
    constructor(
        private readonly httpResouceService: HttpResourceService,
        private readonly configService: ConfigService,
        private readonly authService: AuthService
    ) {}
    
    async quoteCreate(request: exchangeQuoteCreateI): Promise<any>  {
        const credentials = {
            clientId: "c859cd16-9dee-4c7b-a230-bf2c6f055cd3",
            clientSecret: "ClientSecret"
        };

        const data = await this.authService.authClient(credentials);

        const X_API_TYPE = this.configService.get<string>('X_API_TYPE');
        const API_URL_BASE_SUPRA = this.configService.get<string>('API_URL_BASE_SUPRA');

        const body = {
            "initialCurrency": request.initialCurrency,
            "finalCurrency": request.finalCurrency,
            "initialAmount": request.initialAmount
        };

        const HEADERS = {
            'x-api-type': X_API_TYPE,
             Authorization: `Bearer ${data.token}`
        };

        const response = await this.httpResouceService.callPost(`${API_URL_BASE_SUPRA}/v1/exchange/quote`, body, HEADERS);

        return response.data;
    }
}
