import { Module } from '@nestjs/common';
import { AuthController } from './auth/auth.controller';
import { ConcertsModule } from './concerts/concerts.module';
import { ReservationsModule } from './reservations/reservations.module';

@Module({
  imports: [ConcertsModule, ReservationsModule],
  controllers: [AuthController],
})
export class RoutesModule {}
