import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PayinController } from 'src/controller/payin.controller';
import { Client } from 'src/entity/client.entity';
import { AuthService } from 'src/service/auth.service';
import { HttpResourceService } from 'src/service/http-resource.service';
import { PayinService } from 'src/service/payin.service';

@Module({
    imports: [
        HttpModule,
        TypeOrmModule.forFeature([Client])
    ],
    controllers: [PayinController],
    providers: [PayinService, HttpResourceService, AuthService]
})
export class PayoutModule {}
