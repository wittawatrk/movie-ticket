"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepositoryService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("./prisma.service");
const bcrypt = __importStar(require("bcrypt"));
let UserRepositoryService = class UserRepositoryService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findUnique(username) {
        return this.prisma.user.findUnique({
            where: { username, isActive: true },
            include: { UserSecret: true },
        });
    }
    async create(createUserDto) {
        const { password, ...body } = createUserDto;
        return this.prisma.user.create({
            data: {
                ...body,
                UserSecret: {
                    create: {
                        hPassword: await bcrypt.hash(password, 20),
                    },
                },
            },
        });
    }
    async findOne(id) {
        return this.prisma.user.findUnique({ where: { id: id } });
    }
    async update(id, updateUserDto) {
        const { password, ...updateData } = updateUserDto;
        let hashedPassword = '';
        if (password)
            hashedPassword = await bcrypt.hash(password, 20);
        return this.prisma.$transaction(async (prisma) => {
            const userUpdate = prisma.user.update({
                data: { ...updateData },
                where: { id: id },
            });
            if (password) {
                const passwordUpdate = prisma.userSecret.update({
                    where: { userId: id },
                    data: {
                        hPassword: hashedPassword,
                    },
                });
                await passwordUpdate;
            }
            return userUpdate;
        });
    }
    async delete(id) {
        return this.prisma.user.delete({ where: { id: id } });
    }
    async findMany() {
        return this.prisma.user.findMany();
    }
};
exports.UserRepositoryService = UserRepositoryService;
exports.UserRepositoryService = UserRepositoryService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UserRepositoryService);
//# sourceMappingURL=user-repository.service.js.map