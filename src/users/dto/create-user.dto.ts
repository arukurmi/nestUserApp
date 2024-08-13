import { IsNotEmpty, IsEmail, IsEnum, IsString } from 'class-validator';

export class createUserDTO {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsEnum(['INTERN', 'ENGINEER', 'ADMIN'], {
    message: 'Valid Role Required',
  })
  role: 'INTERN' | 'ENGINEER' | 'ADMIN';
}
