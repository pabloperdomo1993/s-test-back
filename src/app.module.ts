import { MiddlewareConsumer, Module } from '@nestjs/common';
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
import { LoggerMiddleware } from './middleware/auth.middleware';
import { AuthService } from './service/auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Client } from './entity/client.entity';

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
    TypeOrmModule.forFeature([Client])
  ],
  controllers: [AppController],
  providers: [AppService, HttpResourceService, AuthService],
})

export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes('exchange', 'payin', 'payout');
  }
}
