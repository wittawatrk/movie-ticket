import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import * as _ from 'lodash';
import * as process from 'node:process';
import { UserRepositoryService } from '../../infrastructure/database/services/user-repository.service';
@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserRepositoryService,
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.userService.findUnique(username);
    if (
      user &&
      (await bcrypt.compare(
        password,
        _.get(user, ['UserSecret', '0', 'hPassword']),
      ))
    ) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { UserSecret, ...result } = user; // Exclude UserSecret
      return await this.login(result); // Return the result object without UserSecret
    }
    throw new UnauthorizedException('Invalid credentials');
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.id, role: user.role };
    return {
      access_token: this.jwtService.sign(payload, {
        secret: process.env.JWT_SECRET ?? 'secret',
      }),
    };
  }
}
