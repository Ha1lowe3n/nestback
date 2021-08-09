import { Injectable } from '@nestjs/common';

import { IUsers } from './app.controller';

@Injectable()
export class AppService {
    async getUsers(): Promise<IUsers[]> {
        return [{ id: 1, name: 'hh' }];
    }
}
