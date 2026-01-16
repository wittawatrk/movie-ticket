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
exports.ReservationWithConcertDto = exports.ReservationResponseDto = exports.ReservationStatus = exports.CancelReservationDto = exports.ReserveSeatDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class ReserveSeatDto {
    concertId;
}
exports.ReserveSeatDto = ReserveSeatDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'c2c5a0c0-6e7a-4e4e-9b5f-1d7a9a9c1234',
        description: 'Concert ID to reserve',
    }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ReserveSeatDto.prototype, "concertId", void 0);
class CancelReservationDto {
    reservationId;
}
exports.CancelReservationDto = CancelReservationDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'r1b2c3d4-1111-2222-3333-abcdef123456',
        description: 'Reservation ID',
    }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CancelReservationDto.prototype, "reservationId", void 0);
var ReservationStatus;
(function (ReservationStatus) {
    ReservationStatus["RESERVED"] = "RESERVED";
    ReservationStatus["CANCELLED"] = "CANCELLED";
})(ReservationStatus || (exports.ReservationStatus = ReservationStatus = {}));
class ReservationResponseDto {
    id;
    userId;
    concertId;
    status;
    createdAt;
    cancelledAt;
}
exports.ReservationResponseDto = ReservationResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ReservationResponseDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ReservationResponseDto.prototype, "userId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ReservationResponseDto.prototype, "concertId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: ReservationStatus }),
    (0, class_validator_1.IsEnum)(ReservationStatus),
    __metadata("design:type", String)
], ReservationResponseDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], ReservationResponseDto.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, nullable: true }),
    __metadata("design:type", Date)
], ReservationResponseDto.prototype, "cancelledAt", void 0);
class ReservationWithConcertDto {
    id;
    status;
    createdAt;
    cancelledAt;
    concert;
}
exports.ReservationWithConcertDto = ReservationWithConcertDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ReservationWithConcertDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ReservationWithConcertDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], ReservationWithConcertDto.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ nullable: true }),
    __metadata("design:type", Date)
], ReservationWithConcertDto.prototype, "cancelledAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: {
            id: 'concert-uuid',
            name: 'Coldplay World Tour',
            description: 'Live in Bangkok',
            totalSeats: 5000,
            reservedSeats: 3200,
        },
    }),
    __metadata("design:type", Object)
], ReservationWithConcertDto.prototype, "concert", void 0);
//# sourceMappingURL=reservations.controller.dto.js.map