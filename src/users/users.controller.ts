import { Controller, Delete, Get } from '@nestjs/common';

@Controller('users')
export class UsersController {
    @Get()
    getUsers() {
        return 'hello world';
    }

    @Delete()
    deleteUser(){
        
    }
}
