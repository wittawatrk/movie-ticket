import { ReservationsService } from '../../domain/reservations/reservations.service';
import { ReserveSeatDto } from './reservations.controller.dto';
export declare class ReservationsController {
    private readonly service;
    constructor(service: ReservationsService);
    reserve(req: any, dto: ReserveSeatDto): Promise<{
        id: string;
        createdAt: Date;
        userId: string;
        concertId: string;
        status: import(".prisma/client").$Enums.ReservationStatus;
        cancelledAt: Date | null;
    }>;
    cancel(req: any, reservationId: string): Promise<{
        id: string;
        createdAt: Date;
        userId: string;
        concertId: string;
        status: import(".prisma/client").$Enums.ReservationStatus;
        cancelledAt: Date | null;
    }>;
    myHistory(req: any): import(".prisma/client").Prisma.PrismaPromise<({
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
    allHistory(): import(".prisma/client").Prisma.PrismaPromise<({
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
