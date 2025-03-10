import { Controller, Get } from '@nestjs/common';

@Controller('api/users')
export class UsersController {

    @Get('toti')
    totiUtilizatorii(): string {        
        return 'This action returns all users';
    }
}
