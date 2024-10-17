import { Controller, Get, Post, Headers, Body } from '@nestjs/common';
import { PayinPaymentCreateDto } from 'src/dto/payin.payment.create.dto';
import { PayinService } from 'src/service/payin.service';

@Controller('payin')
export class PayinController {
    constructor(private readonly payinService: PayinService) { }

    @Post('payment')
    paymentCreate(@Body() body: PayinPaymentCreateDto): any {
        return this.payinService.paymentCreate(body);
    }

    @Get('payment/:id')
    paymentById(): any {
        return this.payinService.paymentById();
    }
}
