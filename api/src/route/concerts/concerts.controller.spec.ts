import { Test, TestingModule } from '@nestjs/testing';
import { ConcertsController } from './concerts.controller';
import { ConcertService } from '../../domain/concert/concert.service';
import { JwtAuthGuard } from '../../domain/auth/jwt-auth.guard';
import { RoleGuard } from '../../domain/auth/role.gaurd';

describe('ConcertsController', () => {
  let controller: ConcertsController;
  let service: ConcertService;

  const mockConcertService = {
    create: jest.fn(),
    delete: jest.fn(),
    findAll: jest.fn(),
    findAllByUser: jest.fn(),
  };

  const mockUserReq = {
    user: {
      id: 'user-uuid-1',
      role: 'USER',
    },
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ConcertsController],
      providers: [
        {
          provide: ConcertService,
          useValue: mockConcertService,
        },
      ],
    })
      .overrideGuard(JwtAuthGuard)
      .useValue({ canActivate: () => true })
      .overrideGuard(RoleGuard)
      .useValue({ canActivate: () => true })
      .compile();

    controller = module.get<ConcertsController>(ConcertsController);
    service = module.get<ConcertService>(ConcertService);
  });

  afterEach(() => jest.clearAllMocks());

  it('should create a concert (ADMIN)', async () => {
    const dto = {
      name: 'Coldplay World Tour',
      description: 'Live in BKK',
      totalSeats: 100,
    };

    const mockResult = { id: 'concert-1', ...dto };

    mockConcertService.create.mockResolvedValue(mockResult);

    const result = await controller.create(dto as any);

    expect(service.create).toHaveBeenCalledWith(dto);
    expect(result).toEqual(mockResult);
  });

  it('should delete a concert by id (ADMIN)', async () => {
    const concertId = 'concert-1';

    mockConcertService.delete.mockResolvedValue({ success: true });

    const result = await controller.remove(concertId);

    expect(service.delete).toHaveBeenCalledWith(concertId);
    expect(result).toEqual({ success: true });
  });

  it('should get all concerts (ADMIN)', async () => {
    const mockList = [
      { id: 'c1', name: 'Concert 1' },
      { id: 'c2', name: 'Concert 2' },
    ];

    mockConcertService.findAll.mockResolvedValue(mockList);

    const result = await controller.findAll();

    expect(service.findAll).toHaveBeenCalled();
    expect(result).toEqual(mockList);
  });

  it('should get all concerts with reservations by user (USER)', async () => {
    const mockList = [
      {
        id: 'c1',
        name: 'Coldplay',
        reservations: [{ id: 'r1', userId: 'user-uuid-1' }],
      },
    ];

    mockConcertService.findAllByUser.mockResolvedValue(mockList);

    const result = await controller.findAllByUser(mockUserReq as any);

    expect(service.findAllByUser).toHaveBeenCalledWith('user-uuid-1');
    expect(result).toEqual(mockList);
  });
});
