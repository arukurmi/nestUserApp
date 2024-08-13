import { Injectable } from '@nestjs/common';
import { updateUserDTO } from './dto/update-user.dto';
import { createUserDTO } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  private users = [
    {
      id: 1,
      name: 'John Doe',
      email: 'johndoe@example.com',
      role: 'ADMIN',
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'janesmith@example.com',
      role: 'ADMIN',
    },
    {
      id: 3,
      name: 'Alice Johnson',
      email: 'alicejohnson@example.com',
      role: 'ENGINEER',
    },
    {
      id: 4,
      name: 'Bob Brown',
      email: 'bobbrown@example.com',
      role: 'ENGINEER',
    },
    {
      id: 5,
      name: 'Charlie Davis',
      email: 'charliedavis@example.com',
      role: 'ENGINEER',
    },
    {
      id: 6,
      name: 'David Wilson',
      email: 'davidwilson@example.com',
      role: 'ENGINEER',
    },
    {
      id: 7,
      name: 'Emily White',
      email: 'emilywhite@example.com',
      role: 'INTERN',
    },
    {
      id: 8,
      name: 'Frank Green',
      email: 'frankgreen@example.com',
      role: 'INTERN',
    },
    {
      id: 9,
      name: 'Grace Black',
      email: 'graceblack@example.com',
      role: 'INTERN',
    },
  ];

  findUsers() {
    return this.users;
  }

  findOne(id: number) {
    const user = this.users.find((user) => user.id === id);
    return user;
  }

  createUser(user: createUserDTO) {
    const usersByHighestId = this.users.sort((a, b) => b.id - a.id);
    const newUser = { id: usersByHighestId[0].id + 1, ...user };
    this.users = [newUser, ...this.users];
    return newUser;
  }

  updateUser(id: number, updateUserBody: updateUserDTO) {
    this.users = this.users.map((user) => {
      if (user.id === id) {
        return { ...user, ...updateUserBody };
      }
      return user;
    });
    return this.findOne(id);
  }

  deleteUser(id: number) {
    const deletedUser = this.findOne(id);
    this.users = this.users.filter((user) => user.id !== id);
    return deletedUser;
  }
}
