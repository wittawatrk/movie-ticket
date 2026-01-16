import { Module } from '@nestjs/common';
import { UserService } from '../../domain/user/user.service';
import { ConcertsController } from './concerts.controller';

@Module({
  controllers: [ConcertsController],
  providers: [UserService],
})
export class ConcertsModule {}
