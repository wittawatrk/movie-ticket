import { UserRepositoryService } from '../../infrastructure/database/services/user-repository.service';
import { CreateUserDto, UpdateUserDto } from '../../route/user/user.controller.dto';
export declare class UserService {
    private userRepository;
    constructor(userRepository: UserRepositoryService);
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
