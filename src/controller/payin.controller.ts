import { Controller, Get, Post } from '@nestjs/common';
import { PayinService } from 'src/service/payin.service';

@Controller('payin')
export class PayinController {
    constructor(private readonly payinService: PayinService) { }

    @Post('payment')
    paymentCreate(): any {
        return this.payinService.paymentCreate();
    }

    @Get('payment/:id')
    paymentById(): any {
        return this.payinService.paymentById();
    }
}
