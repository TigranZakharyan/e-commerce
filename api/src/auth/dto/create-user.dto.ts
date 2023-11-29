import { ApiProperty } from '@nestjs/swagger';
import { $Enums, Prisma } from '@prisma/client';

export class CreateUserDto implements Prisma.userCreateInput {
  @ApiProperty()
  email: string;

  @ApiProperty()
  phone: number;

  @ApiProperty()
  password: string;

  @ApiProperty()
  firstName: string;

  @ApiProperty()
  lastName: string;

  role?: $Enums.Role;
  otp: number;
  active?: boolean;
  createdAt?: string | Date;
}
