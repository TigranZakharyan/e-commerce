import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from '../user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { constants } from 'src/config';
import { UserService } from 'src/user/user.service';
import { PrismaService } from 'src/prisma.service';
import { CryptModule } from 'src/crypt/crypt.module';

@Module({
  imports: [
    UserModule,
    CryptModule,
    JwtModule.register({
      global: true,
      secret: constants.jwtSecret,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [AuthService, UserService, PrismaService],
  controllers: [AuthController],
})
export class AuthModule {}
