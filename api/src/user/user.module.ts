import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { CryptModule } from 'src/crypt/crypt.module';
import { PrismaService } from 'src/prisma.service';
import { CryptService } from 'src/crypt/crypt.service';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [CryptModule],
  providers: [UserService, PrismaService, CryptService, ConfigService],
})
export class UserModule {}
