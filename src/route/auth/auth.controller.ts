import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { LoginDto, LoginResponseDto } from './auth.controller.dto';
import { AuthService } from '../../domain/auth/auth.service';

@ApiTags('Authentication') // Adds a Swagger tag
@Controller({
  version: '1',
  path: 'auth',
})
export class AuthController {
  constructor(private authService: AuthService) {}

  @ApiOperation({
    summary: 'User Login',
    description: 'Logs in a user and returns an access token.',
  })
  @ApiResponse({
    status: 200,
    description: 'Successful login',
    type: LoginResponseDto,
  })
  @ApiResponse({
    status: 401,
    description: 'Invalid credentials',
  })
  @Post('login')
  async login(@Body() body: LoginDto) {
    return this.authService.validateUser(body.username, body.password);
  }
}
