import { Test, TestingModule } from '@nestjs/testing';
import { ReservationsService } from './reservations.service';
import { PrismaService } from '../../infrastructure/database/services/prisma.service';
import { BadRequestException, NotFoundException } from '@nestjs/common';

describe('ReservationsService', () => {
  let service: ReservationsService;
  let prisma: any;

  const mockTx = {
    concert: {
      findUnique: jest.fn(),
      update: jest.fn(),
    },
    reservation: {
      findMany: jest.fn(),
      findFirst: jest.fn(),
      create: jest.fn(),
      update: jest.fn(),
    },
  };

  const mockPrisma = {
    $transaction: jest.fn((cb) => cb(mockTx)),
    reservation: {
      findMany: jest.fn(),
    },
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ReservationsService,
        {
          provide: PrismaService,
          useValue: mockPrisma,
        },
      ],
    }).compile();

    service = module.get<ReservationsService>(ReservationsService);
    prisma = module.get<PrismaService>(PrismaService);
  });

  afterEach(() => jest.clearAllMocks());

  describe('reserve()', () => {
    it('should reserve seat successfully', async () => {
      mockTx.concert.findUnique.mockResolvedValue({
        id: 'c1',
        totalSeats: 10,
        reservedSeats: 5,
      });
      mockTx.reservation.findMany.mockResolvedValue([]);
      mockTx.concert.update.mockResolvedValue({});
      mockTx.reservation.create.mockResolvedValue({ id: 'r1' });

      const result = await service.reserve('u1', 'c1');

      expect(result).toEqual({ id: 'r1' });
      expect(mockTx.concert.update).toHaveBeenCalled();
      expect(mockTx.reservation.create).toHaveBeenCalledWith({
        data: { userId: 'u1', concertId: 'c1' },
      });
    });

    it('should throw NotFound if concert not found', async () => {
      mockTx.concert.findUnique.mockResolvedValue(null);

      await expect(service.reserve('u1', 'c1')).rejects.toBeInstanceOf(
        NotFoundException,
      );
    });

    it('should throw Sold out if no seats left', async () => {
      mockTx.concert.findUnique.mockResolvedValue({
        totalSeats: 10,
        reservedSeats: 10,
      });

      await expect(service.reserve('u1', 'c1')).rejects.toBeInstanceOf(
        BadRequestException,
      );
    });

    it('should throw if user already has reservation', async () => {
      mockTx.concert.findUnique.mockResolvedValue({
        totalSeats: 10,
        reservedSeats: 5,
      });
      mockTx.reservation.findMany.mockResolvedValue([{ id: 'r1' }]);

      await expect(service.reserve('u1', 'c1')).rejects.toBeInstanceOf(
        BadRequestException,
      );
    });
  });

  describe('cancel()', () => {
    it('should cancel reservation and decrement seat', async () => {
      mockTx.reservation.findFirst.mockResolvedValue({
        id: 'r1',
        concertId: 'c1',
      });

      mockTx.reservation.update.mockResolvedValue({
        id: 'r1',
        concertId: 'c1',
      });

      mockTx.concert.update.mockResolvedValue({});

      const result = await service.cancel('u1', 'r1');

      expect(result.id).toBe('r1');
      expect(mockTx.concert.update).toHaveBeenCalled();
    });

    it('should throw if reservation not found', async () => {
      mockTx.reservation.findFirst.mockResolvedValue(null);

      await expect(service.cancel('u1', 'r1')).rejects.toBeInstanceOf(
        BadRequestException,
      );
    });
  });

  describe('myHistory()', () => {
    it('should return user reservation history', async () => {
      const mockData = [{ id: 'r1', concert: { id: 'c1' } }];
      prisma.reservation.findMany.mockResolvedValue(mockData);

      const result = await service.myHistory('u1');

      expect(result).toEqual(mockData);
      expect(prisma.reservation.findMany).toHaveBeenCalledWith({
        where: { userId: 'u1' },
        include: { concert: true },
      });
    });
  });

  describe('allHistory()', () => {
    it('should return all reservation history', async () => {
      const mockData = [{ id: 'r1' }];
      prisma.reservation.findMany.mockResolvedValue(mockData);

      const result = await service.allHistory();

      expect(result).toEqual(mockData);
      expect(prisma.reservation.findMany).toHaveBeenCalledWith({
        include: { user: true, concert: true },
      });
    });
  });
});
