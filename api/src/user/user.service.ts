import { Injectable } from '@nestjs/common';
import { CryptService } from 'src/crypt/crypt.service';
import { PrismaService } from 'src/prisma.service';
import { CreateUserDto } from '../auth/dto/create-user.dto';
import { constants } from 'src/config';

@Injectable()
export class UserService {
  constructor(
    private prisma: PrismaService,
    private cryptService: CryptService,
  ) {}

  async create(dto: CreateUserDto) {
    dto.password = await this.cryptService.encrypt(dto.password);
    return await this.prisma.user.create({ data: dto });
  }

  async generateOTP(email: string): Promise<number> {
    const length = constants.verificationCodeLength;
    const otp = this.cryptService.generateUUID(length);
    await this.prisma.user.update({ where: { email }, data: { otp } });
    return otp;
  }

  // findAll() {
  //   return `This action returns all user`;
  // }

  async findOneByEmail(email: string) {
    return await this.prisma.user.findFirst({ where: { email } });
  }

  // update(id: number, dto: UpdateUserDto) {
  //   return `This action updates a #${id} user`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} user`;
  // }
}
