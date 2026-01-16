import { CreateConcertDto } from './concerts.controller.dto';
import { ConcertService } from '../../domain/concert/concert.service';
export declare class ConcertsController {
    private readonly service;
    constructor(service: ConcertService);
    create(dto: CreateConcertDto): import(".prisma/client").Prisma.Prisma__ConcertClient<{
        id: string;
        createdAt: Date;
        name: string;
        description: string;
        totalSeats: number;
        reservedSeats: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__ConcertClient<{
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
