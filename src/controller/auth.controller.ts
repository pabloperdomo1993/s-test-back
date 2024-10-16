import { Body, Controller, Post } from '@nestjs/common';
import { AuthClientDto } from 'src/dto/auth.client.dto';
import { AuthService } from 'src/service/auth.service';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post()
    async authClient(@Body() client: AuthClientDto): Promise<any> {
        return await this.authService.authClient(client);
    }
}
