import { Injectable } from '@nestjs/common';
import { authClientI } from 'src/interface/auth.client.interface';
import { HttpResourceService } from './http-resource.service';
import { authTokenI } from 'src/interface/auth.token.interface';
import { ConfigService } from '@nestjs/config';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Client } from 'src/entity/client.entity';
import { authClientCreateI } from 'src/interface/auth.client.create.interface';
import { hashSync, compareSync } from 'bcryptjs';
import { authClientLoginI } from 'src/interface/auth.client.login.interface';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthService {
    constructor(
        private readonly httpResouceService: HttpResourceService,
        private readonly configService: ConfigService,
        @InjectRepository(Client)
        private clientRepository: Repository<Client>
    ) {}

    async authClient(client: authClientI): Promise<authTokenI> {
        const X_API_TYPE = this.configService.get<string>('X_API_TYPE');
        const API_URL_BASE_SUPRA = this.configService.get<string>('API_URL_BASE_SUPRA');

        const BODY = {
            clientId: client.clientId,
            clientSecret: client.clientSecret
        };

        const HEADERS = {
            'x-api-type': X_API_TYPE
        };

        const response = await this.httpResouceService.callPost(`${API_URL_BASE_SUPRA}/v1/auth/token`, BODY, HEADERS);

        return response.data;
    }

    async authClientCreate(client: authClientCreateI): Promise<any> {
        const encryptedPassword = hashSync(client.password, 8);

        const newClient = {
            clientId: client.clientId,
            clientSecret: client.clientSecret,
            fullName: client.fullName,
            documentType: client.documentType,
            referenceId: client.referenceId,
            email: client.email,
            cellPhone: client.cellPhone,
            document: client.document,
            description: client.description,
            password: encryptedPassword,
            createAt: new Date()
        };

        const response = await this.clientRepository.save(newClient);

        return response;
    }

    async authLogin(client: authClientLoginI): Promise<any> {
        const response = await this.clientRepository.findOne({
            where: { email: client.email }
        });

        const isValid = compareSync(client.password, response.password);

        if (isValid) {
            const token = this.generateToken(response);

            return { token }; 
        }
    }

    async authClientById(id: number): Promise<any> {
        const response = await this.clientRepository.findOne({
            where: { id: id }
        });

        return response;
    }

    generateToken(client: any): string {
        const payload = {
          idClient: client.id,
          documentNumber: client.documentNumber
        };
      
        const options = {
          expiresIn: '24h'
        };
      
        const SECRET_KEY = this.configService.get<string>('JWT_SECRET_KEY');

        const token = jwt.sign(payload, SECRET_KEY, options);
      
        return token;
    };
}
