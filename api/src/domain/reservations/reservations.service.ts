import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../../infrastructure/database/services/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class ReservationsService {
  constructor(private prisma: PrismaService) {}

  async reserve(userId: string, concertId: string) {
    return this.prisma.$transaction(
      async (tx) => {
        const concert = await tx.concert.findUnique({
          where: { id: concertId },
        });

        if (!concert) throw new NotFoundException('Concert not found');
        if (concert.reservedSeats >= concert.totalSeats)
          throw new BadRequestException('Sold out');

        const reserve = await tx.reservation.findMany({
          where: { userId: userId, status: 'RESERVED' },
        });
        console.log(reserve);
        if (reserve.length > 0)
          throw new BadRequestException('Reservation already exists');
        await tx.concert.update({
          where: { id: concertId },
          data: { reservedSeats: { increment: 1 } },
        });

        return tx.reservation.create({
          data: { userId, concertId },
        });
      },
      {
        isolationLevel: Prisma.TransactionIsolationLevel.Serializable,
      },
    );
  }

  async cancel(userId: string, reservationId: string) {
    return this.prisma.$transaction(async (tx) => {
      const reservation = await tx.reservation.update({
        where: { id: reservationId },
        data: { status: 'CANCELLED', cancelledAt: new Date() },
      });

      await tx.concert.update({
        where: { id: reservation.concertId },
        data: { reservedSeats: { decrement: 1 } },
      });

      return reservation;
    });
  }

  myHistory(userId: string) {
    return this.prisma.reservation.findMany({
      where: { userId },
      include: { concert: true },
    });
  }

  allHistory() {
    return this.prisma.reservation.findMany({
      include: { user: true, concert: true },
    });
  }
}
