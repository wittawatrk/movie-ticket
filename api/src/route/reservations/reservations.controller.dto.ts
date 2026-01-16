import { ApiProperty } from '@nestjs/swagger';
import { IsUUID, IsEnum } from 'class-validator';

/**
 * Request: Reserve seat
 */
export class ReserveSeatDto {
  @ApiProperty({
    example: 'c2c5a0c0-6e7a-4e4e-9b5f-1d7a9a9c1234',
    description: 'Concert ID to reserve',
  })
  @IsUUID()
  concertId: string;
}

/**
 * Request: Cancel reservation
 */
export class CancelReservationDto {
  @ApiProperty({
    example: 'r1b2c3d4-1111-2222-3333-abcdef123456',
    description: 'Reservation ID',
  })
  @IsUUID()
  reservationId: string;
}

/**
 * Response: Reservation data
 */
export enum ReservationStatus {
  RESERVED = 'RESERVED',
  CANCELLED = 'CANCELLED',
}

export class ReservationResponseDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  userId: string;

  @ApiProperty()
  concertId: string;

  @ApiProperty({ enum: ReservationStatus })
  @IsEnum(ReservationStatus)
  status: ReservationStatus;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty({ required: false, nullable: true })
  cancelledAt?: Date;
}

/**
 * Response: Reservation with concert info
 */
export class ReservationWithConcertDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  status: ReservationStatus;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty({ nullable: true })
  cancelledAt?: Date;

  @ApiProperty({
    example: {
      id: 'concert-uuid',
      name: 'Coldplay World Tour',
      description: 'Live in Bangkok',
      totalSeats: 5000,
      reservedSeats: 3200,
    },
  })
  concert: {
    id: string;
    name: string;
    description: string;
    totalSeats: number;
    reservedSeats: number;
  };
}
