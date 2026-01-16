import { JwtService } from '@nestjs/jwt';
import { UserRepositoryService } from '../../infrastructure/database/services/user-repository.service';
export declare class AuthService {
    private readonly jwtService;
    private readonly userService;
    constructor(jwtService: JwtService, userService: UserRepositoryService);
    validateUser(username: string, password: string): Promise<any>;
    login(user: any): Promise<{
        access_token: string;
    }>;
}
