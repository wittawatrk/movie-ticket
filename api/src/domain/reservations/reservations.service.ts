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
          where: {
            userId: userId,
            status: 'RESERVED',
            cancelledAt: null,
          },
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

  async cancel(userId: string, concertId: string) {
    return this.prisma.$transaction(async (tx) => {
      const reserve = await tx.reservation.findFirst({
        where: {
          userId: userId,
          concertId: concertId,
          status: 'RESERVED',
          cancelledAt: null,
        },
      });
      if (!reserve)
        throw new BadRequestException('Reservation Not Found or Cancelled');
      const reservation = await tx.reservation.update({
        where: { id: reserve.id },
        data: { cancelledAt: new Date() },
      });

      await tx.concert.update({
        where: { id: reservation.concertId },
        data: { reservedSeats: { decrement: 1 } },
      });

      return tx.reservation.create({
        data: { userId, concertId: reservation.concertId, status: 'CANCELLED' },
      });
    });
  }

  myHistory(userId: string) {
    return this.prisma.reservation.findMany({
      where: { userId },
      include: { concert: true, user: true },
    });
  }

  allHistory() {
    return this.prisma.reservation.findMany({
      include: { user: true, concert: true },
    });
  }
}
