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
exports.ConcertsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../../domain/auth/jwt-auth.guard");
const roles_decorator_1 = require("../../domain/auth/roles.decorator");
const role_gaurd_1 = require("../../domain/auth/role.gaurd");
const concerts_controller_dto_1 = require("./concerts.controller.dto");
const concert_service_1 = require("../../domain/concert/concert.service");
let ConcertsController = class ConcertsController {
    service;
    constructor(service) {
        this.service = service;
    }
    create(dto) {
        return this.service.create(dto);
    }
    remove(id) {
        return this.service.delete(id);
    }
    findAll() {
        return this.service.findAll();
    }
};
exports.ConcertsController = ConcertsController;
__decorate([
    (0, common_1.Post)(),
    (0, roles_decorator_1.Roles)('ADMIN'),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new concert' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Concert created successfully' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Forbidden (Admin only)' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [concerts_controller_dto_1.CreateConcertDto]),
    __metadata("design:returntype", void 0)
], ConcertsController.prototype, "create", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, roles_decorator_1.Roles)('ADMIN'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a concert by ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Concert deleted successfully' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Concert not found' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ConcertsController.prototype, "remove", null);
__decorate([
    (0, common_1.Get)(),
    (0, roles_decorator_1.Roles)('ADMIN', 'USER'),
    (0, swagger_1.ApiOperation)({ summary: 'Get all concerts (Admin view)' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'List of concerts returned' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ConcertsController.prototype, "findAll", null);
exports.ConcertsController = ConcertsController = __decorate([
    (0, swagger_1.ApiTags)('Admin - Concerts'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, role_gaurd_1.RoleGuard),
    (0, common_1.Controller)('concerts'),
    __metadata("design:paramtypes", [concert_service_1.ConcertService])
], ConcertsController);
//# sourceMappingURL=concerts.controller.js.map