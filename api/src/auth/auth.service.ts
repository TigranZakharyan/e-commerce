import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { SignInDto } from './dto/sign-in.dto';
import { CryptService } from 'src/crypt/crypt.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
    private cryptService: CryptService,
  ) {}

  async signIn(dto: SignInDto): Promise<any> {
    const { email, password } = dto;
    const user = await this.usersService.findOneByEmail(email);
    const comparedPass = await this.cryptService.compare(
      password,
      user?.password,
    );
    if (!comparedPass) {
      throw new UnauthorizedException();
    }
    const payload = { sub: user.id, email: user.email };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  async sendOTP(email: string) {
    return await this.usersService.generateOTP(email);
  }
}
