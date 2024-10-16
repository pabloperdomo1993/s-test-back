import { Module } from '@nestjs/common';
import { PayinController } from 'src/controller/payin.controller';
import { PayinService } from 'src/service/payin.service';

@Module({
    controllers: [PayinController],
    providers: [PayinService]
})
export class PayinModule {}
