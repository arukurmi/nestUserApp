import { Module } from '@nestjs/common';
import { Users } from './users';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  providers: [Users, UsersService],
  controllers: [UsersController]
})
export class UsersModule {
    
}
