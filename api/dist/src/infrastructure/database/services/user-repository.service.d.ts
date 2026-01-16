import { PrismaService } from './prisma.service';
import { CreateUserDto, UpdateUserDto } from '../../../route/user/user.controller.dto';
export declare class UserRepositoryService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findUnique(username: string): Promise<({
        UserSecret: {
            id: number;
            hPassword: string;
            userId: string | null;
        }[];
    } & {
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
    }) | null>;
    create(createUserDto: CreateUserDto): Promise<{
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
    update(id: string, updateUserDto: UpdateUserDto): Promise<{
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
    delete(id: string): Promise<{
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
    findMany(): Promise<{
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
}
