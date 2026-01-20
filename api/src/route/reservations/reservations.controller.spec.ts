import { Test, TestingModule } from '@nestjs/testing';
import { ReservationsController } from './reservations.controller';
import { ReservationsService } from '../../domain/reservations/reservations.service';
import { JwtAuthGuard } from '../../domain/auth/jwt-auth.guard';
import { RoleGuard } from '../../domain/auth/role.gaurd';

describe('ReservationsController', () => {
  let controller: ReservationsController;
  let service: ReservationsService;

  const mockService = {
    reserve: jest.fn(),
    cancel: jest.fn(),
    myHistory: jest.fn(),
    allHistory: jest.fn(),
  };

  const mockUserReq = {
    user: {
      userId: 'user-uuid-1',
      role: 'USER',
    },
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReservationsController],
      providers: [
        {
          provide: ReservationsService,
          useValue: mockService,
        },
      ],
    })
      .overrideGuard(JwtAuthGuard)
      .useValue({ canActivate: () => true })
      .overrideGuard(RoleGuard)
      .useValue({ canActivate: () => true })
      .compile();

    controller = module.get<ReservationsController>(ReservationsController);
    service = module.get<ReservationsService>(ReservationsService);
  });

  afterEach(() => jest.clearAllMocks());

  it('should reserve a seat', async () => {
    const dto = { concertId: 'concert-uuid-1' };
    const mockResult = { id: 'reserve-uuid-1', status: 'RESERVED' };

    mockService.reserve.mockResolvedValue(mockResult);

    const result = await controller.reserve(mockUserReq as any, dto);

    expect(service.reserve).toHaveBeenCalledWith('user-uuid-1', 'concert-uuid-1');
    expect(result).toEqual(mockResult);
  });

  it('should cancel reservation', async () => {
    const reservationId = 'reserve-uuid-1';
    const mockResult = { id: reservationId, status: 'CANCELLED' };

    mockService.cancel.mockResolvedValue(mockResult);

    const result = await controller.cancel(mockUserReq as any, reservationId);

    expect(service.cancel).toHaveBeenCalledWith('user-uuid-1', reservationId);
    expect(result).toEqual(mockResult);
  });

  it('should return my reservation history', async () => {
    const mockHistory = [
      {
        id: 'r1',
        concertId: 'c1',
        status: 'RESERVED',
      },
    ];

    mockService.myHistory.mockResolvedValue(mockHistory);

    const result = await controller.myHistory(mockUserReq as any);

    expect(service.myHistory).toHaveBeenCalledWith('user-uuid-1');
    expect(result).toEqual(mockHistory);
  });

  it('should return all reservations for admin', async () => {
    const mockAll = [
      { id: 'r1', userId: 'u1' },
      { id: 'r2', userId: 'u2' },
    ];

    mockService.allHistory.mockResolvedValue(mockAll);

    const result = await controller.allHistory();

    expect(service.allHistory).toHaveBeenCalled();
    expect(result.length).toBe(2);
  });
});
