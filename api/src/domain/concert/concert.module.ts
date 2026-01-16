import { Global, Module } from '@nestjs/common';
import { ConcertService } from './concert.service';

const importsExports = [ConcertService];
@Global()
@Module({
  providers: [...importsExports],
  exports: [...importsExports],
})
export class ConcertModule {}
