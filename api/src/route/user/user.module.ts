import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from '../../domain/user/user.service';

@Module({
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
