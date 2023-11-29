import {
  Body,
  Controller,
  Post,
  HttpCode,
  HttpStatus,
  Get,
  Query,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { UserDto } from './dto/user.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from 'src/user/user.service';
import { SignInDto } from './dto/sign-in.dto';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private userService: UserService,
  ) {}

  @HttpCode(HttpStatus.OK)
  @Post('signIn')
  signIn(@Body() signInDto: SignInDto) {
    return this.authService.signIn(signInDto);
  }

  @HttpCode(HttpStatus.OK)
  @Post('signUp')
  @ApiOkResponse({
    type: UserDto,
  })
  signUp(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @HttpCode(HttpStatus.OK)
  @Get('otp')
  otp(@Query() email: string) {
    return this.authService.sendOTP(email);
  }
}
