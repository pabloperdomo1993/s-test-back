import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class AuthClientDto {
    @IsString()
    @IsNotEmpty()
    clientId: string;

    @IsString()
    @IsNotEmpty()
    clientSecret: string;

    @IsNumber()
    @IsNotEmpty()
    id: number;
}