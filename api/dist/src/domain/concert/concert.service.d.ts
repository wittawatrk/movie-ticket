import { PrismaService } from '../../infrastructure/database/services/prisma.service';
import { CreateConcertDto } from '../../route/concerts/concerts.controller.dto';
export declare class ConcertService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(dto: CreateConcertDto): import(".prisma/client").Prisma.Prisma__ConcertClient<{
        id: string;
        createdAt: Date;
        name: string;
        description: string;
        totalSeats: number;
        reservedSeats: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    delete(id: string): import(".prisma/client").Prisma.Prisma__ConcertClient<{
        id: string;
        createdAt: Date;
        name: string;
        description: string;
        totalSeats: number;
        reservedSeats: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        id: string;
        createdAt: Date;
        name: string;
        description: string;
        totalSeats: number;
        reservedSeats: number;
    }[]>;
}
