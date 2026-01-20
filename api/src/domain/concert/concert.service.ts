import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../infrastructure/database/services/prisma.service';
import { CreateConcertDto } from '../../route/concerts/concerts.controller.dto';

@Injectable()
export class ConcertService {
  constructor(private readonly prisma: PrismaService) {}

  create(dto: CreateConcertDto) {
    return this.prisma.concert.create({ data: dto });
  }

  delete(id: string) {
    return this.prisma.concert.delete({ where: { id } });
  }

  findAll() {
    return this.prisma.concert.findMany({});
  }

  findAllByUser(userId: string) {
    console.log(userId)
    return this.prisma.concert.findMany({
      where: {
        reservations: {
          some: {
            userId,
            deletedAt: null,
          },
        },
      },
      include: {
        reservations: {
          where: {
            userId,
            deletedAt: null,
          },
        },
      },
    });
  }
}
