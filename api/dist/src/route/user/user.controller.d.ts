import { CreateUserDto, UpdateUserDto } from './user.controller.dto';
import { UserService } from '../../domain/user/user.service';
import * as jwtPayloadInterface from '../../domain/auth/jwt-payload.interface';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(user: jwtPayloadInterface.JwtPayload, createUserDto: CreateUserDto): Promise<{
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
    }>;
    findAll(): Promise<{
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
    }[]>;
    findOne(id: string): Promise<{
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
    } | null>;
    update(user: jwtPayloadInterface.JwtPayload, id: string, updateUserDto: UpdateUserDto): Promise<{
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
    }>;
    remove(id: string): Promise<{
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
    }>;
}
