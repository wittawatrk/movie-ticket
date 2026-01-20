import { Test, TestingModule } from '@nestjs/testing';
import { ConcertService } from './concert.service';
import { PrismaService } from '../../infrastructure/database/services/prisma.service';

describe('ConcertService', () => {
  let service: ConcertService;

  const prismaMock = {
    concert: {
      create: jest.fn(),
      delete: jest.fn(),
      findMany: jest.fn(),
    },
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ConcertService,
        {
          provide: PrismaService,
          useValue: prismaMock,
        },
      ],
    }).compile();

    service = module.get<ConcertService>(ConcertService);
    jest.clearAllMocks();
  });

  describe('create()', () => {
    it('should create concert', async () => {
      const dto = {
        name: 'Coldplay',
        description: 'Live in BKK',
        totalSeats: 100,
      };

      prismaMock.concert.create.mockResolvedValue({
        id: 'c1',
        ...dto,
        reservedSeats: 0,
      });

      const result = await service.create(dto as any);

      expect(prismaMock.concert.create).toHaveBeenCalledWith({ data: dto });
      expect(result.name).toBe('Coldplay');
    });
  });

  describe('delete()', () => {
    it('should delete concert by id', async () => {
      prismaMock.concert.delete.mockResolvedValue({ id: 'c1' });

      const result = await service.delete('c1');

      expect(prismaMock.concert.delete).toHaveBeenCalledWith({ where: { id: 'c1' } });
      expect(result.id).toBe('c1');
    });
  });

  describe('findAll()', () => {
    it('should return all concerts', async () => {
      prismaMock.concert.findMany.mockResolvedValue([
        { id: 'c1', name: 'A' },
        { id: 'c2', name: 'B' },
      ]);

      const result = await service.findAll();

      expect(prismaMock.concert.findMany).toHaveBeenCalled();
      expect(result.length).toBe(2);
    });
  });

  describe('findAllByUser()', () => {
    it('should return concerts with reservations filtered by user', async () => {
      prismaMock.concert.findMany.mockResolvedValue([
        {
          id: 'c1',
          reservations: [{ userId: 'u1' }],
        },
      ]);

      const result = await service.findAllByUser('u1');

      expect(prismaMock.concert.findMany).toHaveBeenCalledWith({
        include: {
          reservations: {
            where: { userId: 'u1' },
          },
        },
      });

      expect(result[0].reservations[0].userId).toBe('u1');
    });
  });
});
