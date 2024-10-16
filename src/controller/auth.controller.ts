import { Controller, Post } from '@nestjs/common';
import { AuthService } from 'src/service/auth.service';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post()
    authClient(): any {
        return this.authService.authClient();
    }
}
