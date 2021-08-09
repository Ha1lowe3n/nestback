import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';

export interface IUsers {
    id: number;
    name: string;
}

@Controller('api')
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get('users')
    getUsers() {
        return this.appService.getUsers();
    }
}
