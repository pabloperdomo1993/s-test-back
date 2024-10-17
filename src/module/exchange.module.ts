import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ExchangeController } from 'src/controller/exchange.controller';
import { AuthService } from 'src/service/auth.service';
import { ExchangeService } from 'src/service/exchange.service';
import { HttpResourceService } from 'src/service/http-resource.service';

@Module({
    imports: [HttpModule],
    controllers: [ExchangeController],
    providers: [ExchangeService, HttpResourceService, AuthService]
})
export class ExchangeModule {}
