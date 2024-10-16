import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExchangeModule } from './module/exchange.module';
import { PayinModule } from './module/payin.module';
import { PayoutModule } from './module/payout.module';
import { AuthModule } from './module/auth.module';
import { HttpResourceService } from './service/http-resource.service';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ExchangeModule, 
    PayinModule, 
    PayoutModule, 
    AuthModule, 
    HttpModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
  ],
  controllers: [AppController],
  providers: [AppService, HttpResourceService],
})

export class AppModule {}
