import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class CryptService {
  private readonly salt = 10;

  async encrypt(str: string): Promise<string> {
    return await bcrypt.hash(str, this.salt);
  }

  async compare(str: string, encrypted: string): Promise<boolean> {
    return await bcrypt.compare(str, encrypted);
  }

  generateUUID(length: number): number {
    return Math.round(Math.random() * 10 ** length);
  }
}
