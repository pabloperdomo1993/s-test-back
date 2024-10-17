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
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    ExchangeModule, 
    PayinModule, 
    PayoutModule, 
    AuthModule, 
    HttpModule,
    DatabaseModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
  ],
  controllers: [AppController],
  providers: [AppService, HttpResourceService],
})

export class AppModule {}
