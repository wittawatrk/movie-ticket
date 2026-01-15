import { Module } from '@nestjs/common';
import { UserService } from './user.service';
const importsExports = [UserService];
@Module({
  providers: [...importsExports],
  exports: [...importsExports],
})
export class UserModule {}
