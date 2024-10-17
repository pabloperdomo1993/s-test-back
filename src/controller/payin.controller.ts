import { Controller, Get, Post, Headers, Body, Param } from '@nestjs/common';
import { AuthClientDto } from 'src/dto/auth.client.dto';
import { PayinPaymentCreateDto } from 'src/dto/payin.payment.create.dto';
import { PayinService } from 'src/service/payin.service';

@Controller('payin')
export class PayinController {
    constructor(private readonly payinService: PayinService) { }

    @Post('payment')
    paymentCreate(@Body() body: PayinPaymentCreateDto & AuthClientDto): any {
        return this.payinService.paymentCreate(body);
    }

    @Get('payment/:id')
    paymentById(@Param('id') id: string, @Body() body: AuthClientDto): any {
        return this.payinService.paymentById(id, body);
    }
}
