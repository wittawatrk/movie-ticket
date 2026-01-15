import { Global, Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import * as process from 'node:process';
import { JwtStrategy } from './jwt.strategy';
const importsExports = [AuthService];
@Global()
@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET ?? 'secret',
      signOptions: { expiresIn: '1h' },
    }),
  ],
  providers: [...importsExports, JwtStrategy],
  exports: [...importsExports],
})
export class AuthModule {}
