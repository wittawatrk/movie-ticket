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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservationsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../../domain/auth/jwt-auth.guard");
const role_gaurd_1 = require("../../domain/auth/role.gaurd");
const reservations_service_1 = require("../../domain/reservations/reservations.service");
const roles_decorator_1 = require("../../domain/auth/roles.decorator");
const reservations_controller_dto_1 = require("./reservations.controller.dto");
let ReservationsController = class ReservationsController {
    service;
    constructor(service) {
        this.service = service;
    }
    reserve(req, dto) {
        console.log(req.user);
        return this.service.reserve(req.user.userId, dto.concertId);
    }
    cancel(req, reservationId) {
        return this.service.cancel(req.user.userId, reservationId);
    }
    myHistory(req) {
        return this.service.myHistory(req.user.userId);
    }
    allHistory() {
        return this.service.allHistory();
    }
};
exports.ReservationsController = ReservationsController;
__decorate([
    (0, common_1.Post)(),
    (0, roles_decorator_1.Roles)('USER'),
    (0, swagger_1.ApiOperation)({ summary: 'Reserve 1 seat for a concert' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Seat reserved successfully' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Sold out or already reserved' }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, reservations_controller_dto_1.ReserveSeatDto]),
    __metadata("design:returntype", void 0)
], ReservationsController.prototype, "reserve", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, roles_decorator_1.Roles)('USER'),
    (0, swagger_1.ApiOperation)({ summary: 'Cancel reservation' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Reservation cancelled' }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], ReservationsController.prototype, "cancel", null);
__decorate([
    (0, common_1.Get)('me'),
    (0, roles_decorator_1.Roles)('USER'),
    (0, swagger_1.ApiOperation)({ summary: 'Get my reservation history' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'My reservation list' }),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ReservationsController.prototype, "myHistory", null);
__decorate([
    (0, common_1.Get)('admin/all'),
    (0, roles_decorator_1.Roles)('ADMIN'),
    (0, swagger_1.ApiOperation)({ summary: 'Get all users reservation history (Admin)' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'All reservations' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ReservationsController.prototype, "allHistory", null);
exports.ReservationsController = ReservationsController = __decorate([
    (0, swagger_1.ApiTags)('Reservations'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, role_gaurd_1.RoleGuard),
    (0, common_1.Controller)('reservations'),
    __metadata("design:paramtypes", [reservations_service_1.ReservationsService])
], ReservationsController);
//# sourceMappingURL=reservations.controller.js.map