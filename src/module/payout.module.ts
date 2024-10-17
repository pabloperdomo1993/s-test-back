import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { PayinController } from 'src/controller/payin.controller';
import { AuthService } from 'src/service/auth.service';
import { HttpResourceService } from 'src/service/http-resource.service';
import { PayinService } from 'src/service/payin.service';

@Module({
    imports: [HttpModule],
    controllers: [PayinController],
    providers: [PayinService, HttpResourceService, AuthService]
})
export class PayoutModule {}
