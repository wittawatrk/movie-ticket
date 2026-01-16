export declare class CreateUserDto {
    readonly username: string;
    readonly displayName?: string;
    readonly password: string;
    readonly role: 'USER' | 'ADMIN';
    createdBy?: number;
    updatedBy?: number;
}
export declare class UpdateUserDto {
    readonly username?: string;
    readonly displayName?: string;
    readonly role?: 'USER' | 'ADMIN';
    readonly password?: string;
    isActive?: boolean;
    updatedBy?: number;
}
