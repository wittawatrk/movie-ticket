import { PrismaService } from '../../infrastructure/database/services/prisma.service';
import { Prisma } from '@prisma/client';
export declare class ReservationsService {
    private prisma;
    constructor(prisma: PrismaService);
    reserve(userId: string, concertId: string): Promise<{
        id: string;
        createdAt: Date;
        userId: string;
        concertId: string;
        status: import(".prisma/client").$Enums.ReservationStatus;
        cancelledAt: Date | null;
    }>;
    cancel(userId: string, reservationId: string): Promise<{
        id: string;
        createdAt: Date;
        userId: string;
        concertId: string;
        status: import(".prisma/client").$Enums.ReservationStatus;
        cancelledAt: Date | null;
    }>;
    myHistory(userId: string): Prisma.PrismaPromise<({
        concert: {
            id: string;
            createdAt: Date;
            name: string;
            description: string;
            totalSeats: number;
            reservedSeats: number;
        };
    } & {
        id: string;
        createdAt: Date;
        userId: string;
        concertId: string;
        status: import(".prisma/client").$Enums.ReservationStatus;
        cancelledAt: Date | null;
    })[]>;
    allHistory(): Prisma.PrismaPromise<({
        user: {
            id: string;
            username: string;
            displayName: string | null;
            createdAt: Date;
            createdBy: number | null;
            updatedAt: Date;
            updatedBy: number | null;
            deletedAt: Date | null;
            deletedBy: number | null;
            role: import(".prisma/client").$Enums.UserRole;
            isActive: boolean;
        };
        concert: {
            id: string;
            createdAt: Date;
            name: string;
            description: string;
            totalSeats: number;
            reservedSeats: number;
        };
    } & {
        id: string;
        createdAt: Date;
        userId: string;
        concertId: string;
        status: import(".prisma/client").$Enums.ReservationStatus;
        cancelledAt: Date | null;
    })[]>;
}
