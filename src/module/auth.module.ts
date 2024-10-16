import { Module } from '@nestjs/common';
import { AuthController } from 'src/controller/auth.controller';
import { AuthService } from 'src/service/auth.service';

@Module({
    controllers: [AuthController],
    providers: [AuthService]
})
export class AuthModule {}
