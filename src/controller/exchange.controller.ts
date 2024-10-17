import { Body, Controller, Post } from '@nestjs/common';
import { AuthClientDto } from 'src/dto/auth.client.dto';
import { ExchangeQuoteCreateDto } from 'src/dto/exchange.quote.create.dto';
import { ExchangeService } from 'src/service/exchange.service';

@Controller('exchange')
export class ExchangeController {
    constructor(private readonly exchangeService: ExchangeService) {}

    @Post('/quote')
    quoteCreate(@Body() body: ExchangeQuoteCreateDto & AuthClientDto): any {
        return this.exchangeService.quoteCreate(body);
    }   
}
