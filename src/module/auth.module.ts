import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { AuthController } from 'src/controller/auth.controller';
import { AuthService } from 'src/service/auth.service';
import { HttpResourceService } from 'src/service/http-resource.service';

@Module({
    imports: [HttpModule],
    controllers: [AuthController],
    providers: [AuthService, HttpResourceService]
})
export class AuthModule {}
