import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExchangeModule } from './module/exchange.module';
import { PayinModule } from './module/payin.module';
import { PayoutModule } from './module/payout.module';
import { AuthModule } from './module/auth.module';

@Module({
  imports: [ExchangeModule, PayinModule, PayoutModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
