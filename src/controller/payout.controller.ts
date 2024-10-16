import { Controller, Post } from '@nestjs/common';
import { PayoutService } from 'src/service/payout.service';

@Controller('payout')
export class PayoutController {
    constructor(private readonly payoutService: PayoutService) {}

    @Post('user-balance')
    userBalanceCreate(): any {
        return this.payoutService.userBalanceCreate();
    }
}
