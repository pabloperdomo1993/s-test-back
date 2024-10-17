import { Injectable, NestMiddleware, UnauthorizedException } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { ConfigService } from '@nestjs/config';
import * as jwt from 'jsonwebtoken';
import { AuthService } from 'src/service/auth.service';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
    constructor(
        private readonly configService: ConfigService,
        private readonly authService: AuthService
    ) {}

    async use(req: Request, res: Response, next: NextFunction) {
        const authHeader = req.headers['authorization'];

        if (!authHeader) {
            throw new UnauthorizedException('Authorization header is missing');
        }

        const token = authHeader.split(' ')[1];

        if (!token) {
            throw new UnauthorizedException('Invalid token format');
        }

        const SECRET_KEY = this.configService.get<string>('JWT_SECRET_KEY');
        const data: any = jwt.verify(token, SECRET_KEY);

        const client: any = await this.authService.authClientById(Number(data.idClient));

        req.body.clientId = client.clientId;
        req.body.clientSecret = client.clientSecret;

        next();
    }
}