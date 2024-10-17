import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class PayinPaymentCreateDto {
    @IsString()
    @IsNotEmpty()
    currency: string;

    @IsNumber()
    @IsNotEmpty()
    amount: number;
    
    @IsString()
    @IsNotEmpty()
    quoteId: string;

    @IsString()
    @IsNotEmpty()
    redirectUrl: string;
}