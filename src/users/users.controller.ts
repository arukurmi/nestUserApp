import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { log } from 'console';

@Controller('users')
export class UsersController {
    @Get()
    getUsers() {
        return [];
    }

    @Get(':id')
    getUserInfo(@Query('id') id: string) {
        console.log("alkrhasdlfhjsdkl");
        console.log(id);
        return {id};
    }

    @Patch(':id')
    updateUser(@Param('id') id: string, @Body() updateUser: {}){
        return id;
    }

    @Post()
    createUser(@Body() user: {}){
        return user;
    }

    @Delete(':id')
    deleteUser(@Param('id') id: string){
        return id;
    }
}
