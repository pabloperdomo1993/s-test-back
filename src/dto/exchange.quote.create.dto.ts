import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class ExchangeQuoteCreateDto {
    @IsString()
    @IsNotEmpty()
    initialCurrency: string;

    @IsString()
    @IsNotEmpty()
    finalCurrency: string;

    @IsNumber()
    @IsNotEmpty()
    initialAmount: number;
}