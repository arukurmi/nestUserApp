import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
   getUsers() {
    return this.usersService.findUsers();
  }

  @Get(':id')
   getUserInfo(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
   updateUser(@Param('id') id: string, @Body() updateUser: {}) {
    const user = this.usersService.updateUser(+id, updateUser);
    return user;
  }

  @Post()
   createUser(
    @Body()
    user: {
      name: string;
      email: string;
      role: 'INTERN' | 'ENGINEER' | 'ADMIN';
    },
  ) {
    const newUser = this.usersService.createUser(user);
    return newUser;
  }

  @Delete(':id')
   deleteUser(@Param('id') id: string) {
    return this.usersService.deleteUser(+id);
  }
}
