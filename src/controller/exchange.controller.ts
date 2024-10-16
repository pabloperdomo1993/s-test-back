import { Controller, Post } from '@nestjs/common';
import { ExchangeService } from 'src/service/exchange.service';

@Controller('exchange')
export class ExchangeController {
    constructor(private readonly exchangeService: ExchangeService) {}

    @Post('/quote')
    quoteCreate(): any {
        return this.exchangeService.quoteCreate();
    }   
}
