import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from './auth.controller';
import { AuthService } from '../../domain/auth/auth.service';

describe('AuthController', () => {
  let controller: AuthController;
  let service: AuthService;

  const mockAuthService = {
    validateUser: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [
        {
          provide: AuthService,
          useValue: mockAuthService,
        },
      ],
    }).compile();

    controller = module.get<AuthController>(AuthController);
    service = module.get<AuthService>(AuthService);
  });

  afterEach(() => jest.clearAllMocks());

  it('should login successfully and return token', async () => {
    const dto = {
      username: 'test@example.com',
      password: 'password123',
    };

    const mockResponse = {
      accessToken: 'jwt-token',
      user: {
        id: 'user-1',
        username: 'test@example.com',
        role: 'USER',
      },
    };

    mockAuthService.validateUser.mockResolvedValue(mockResponse);

    const result = await controller.login(dto);

    expect(service.validateUser).toHaveBeenCalledWith(dto.username, dto.password);
    expect(result).toEqual(mockResponse);
  });

  it('should throw unauthorized when credentials invalid', async () => {
    const dto = {
      username: 'wrong@example.com',
      password: 'wrongpass',
    };

    mockAuthService.validateUser.mockRejectedValue(new Error('Unauthorized'));

    await expect(controller.login(dto)).rejects.toThrow('Unauthorized');
    expect(service.validateUser).toHaveBeenCalledWith(dto.username, dto.password);
  });
});
