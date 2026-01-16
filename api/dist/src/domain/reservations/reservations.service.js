"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservationsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../infrastructure/database/services/prisma.service");
const client_1 = require("@prisma/client");
let ReservationsService = class ReservationsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async reserve(userId, concertId) {
        return this.prisma.$transaction(async (tx) => {
            const concert = await tx.concert.findUnique({
                where: { id: concertId },
            });
            if (!concert)
                throw new common_1.NotFoundException('Concert not found');
            if (concert.reservedSeats >= concert.totalSeats)
                throw new common_1.BadRequestException('Sold out');
            const reserve = await tx.reservation.findMany({
                where: { userId: userId, status: 'RESERVED' },
            });
            console.log(reserve);
            if (reserve.length > 0)
                throw new common_1.BadRequestException('Reservation already exists');
            await tx.concert.update({
                where: { id: concertId },
                data: { reservedSeats: { increment: 1 } },
            });
            return tx.reservation.create({
                data: { userId, concertId },
            });
        }, {
            isolationLevel: client_1.Prisma.TransactionIsolationLevel.Serializable,
        });
    }
    async cancel(userId, reservationId) {
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
    myHistory(userId) {
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
};
exports.ReservationsService = ReservationsService;
exports.ReservationsService = ReservationsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ReservationsService);
//# sourceMappingURL=reservations.service.js.map