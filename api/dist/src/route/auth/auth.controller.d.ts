import { LoginDto } from './auth.controller.dto';
import { AuthService } from '../../domain/auth/auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(body: LoginDto): Promise<any>;
}
