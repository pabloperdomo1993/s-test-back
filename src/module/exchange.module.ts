import { Module } from '@nestjs/common';
import { ExchangeController } from 'src/controller/exchange.controller';
import { ExchangeService } from 'src/service/exchange.service';

@Module({
    controllers: [ExchangeController],
    providers: [ExchangeService]
})
export class ExchangeModule {}
