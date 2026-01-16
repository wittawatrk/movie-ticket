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
exports.CreateConcertDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class CreateConcertDto {
    name;
    description;
    totalSeats;
}
exports.CreateConcertDto = CreateConcertDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Coldplay World Tour' }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateConcertDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Live in Bangkok 2026' }),
    __metadata("design:type", String)
], CreateConcertDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 5000, minimum: 1 }),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], CreateConcertDto.prototype, "totalSeats", void 0);
//# sourceMappingURL=concerts.controller.dto.js.map