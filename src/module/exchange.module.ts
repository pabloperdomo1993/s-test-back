import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExchangeController } from 'src/controller/exchange.controller';
import { Client } from 'src/entity/client.entity';
import { AuthService } from 'src/service/auth.service';
import { ExchangeService } from 'src/service/exchange.service';
import { HttpResourceService } from 'src/service/http-resource.service';

@Module({
    imports: [
        HttpModule,
        TypeOrmModule.forFeature([Client])
    ],
    controllers: [ExchangeController],
    providers: [ExchangeService, HttpResourceService, AuthService]
})
export class ExchangeModule {}
