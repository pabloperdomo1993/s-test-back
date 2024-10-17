import { Body, Controller, Post } from '@nestjs/common';
import { AuthClientCreateDto } from 'src/dto/auth.client.create.dto';
import { AuthClientDto } from 'src/dto/auth.client.dto';
import { AuthService } from 'src/service/auth.service';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post()
    async authClient(@Body() client: AuthClientDto): Promise<any> {
        return await this.authService.authClient(client);
    }

    @Post('client')
    async authClientCreate(@Body() client: AuthClientCreateDto): Promise<any> {
        return await this.authService.authClientCreate(client);
    }

    @Post('login')
    async authClientLogin(@Body() client: any): Promise<any> {
        return await this.authService.authLogin(client);
    }
}
