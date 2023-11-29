import { ApiProperty } from '@nestjs/swagger';
import { $Enums, Prisma } from '@prisma/client';

export class UserDto implements Prisma.userCreateInput {
  @ApiProperty()
  email: string;

  @ApiProperty()
  firstName: string;

  @ApiProperty()
  lastName: string;

  @ApiProperty()
  phone: number;

  @ApiProperty()
  createdAt?: Date;

  role?: $Enums.Role;
  otp: number;
  active?: boolean;
  password: string;
}
