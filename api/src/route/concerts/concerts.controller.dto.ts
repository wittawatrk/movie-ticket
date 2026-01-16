import { IsNotEmpty, IsInt, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateConcertDto {
  @ApiProperty({ example: 'Coldplay World Tour' })
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 'Live in Bangkok 2026' })
  description: string;

  @ApiProperty({ example: 5000, minimum: 1 })
  @IsInt()
  @Min(1)
  totalSeats: number;
}
