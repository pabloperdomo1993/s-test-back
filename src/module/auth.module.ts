import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from 'src/controller/auth.controller';
import { Client } from 'src/entity/client.entity';
import { AuthService } from 'src/service/auth.service';
import { HttpResourceService } from 'src/service/http-resource.service';

@Module({
    imports: [
        HttpModule,
        TypeOrmModule.forFeature([Client])
    ],
    controllers: [AuthController],
    providers: [AuthService, HttpResourceService]
})
export class AuthModule {}
