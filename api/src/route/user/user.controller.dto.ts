import { IsString, IsOptional, IsEnum, IsBoolean } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ description: 'The username of the user', example: 'john_doe' })
  @IsString()
  readonly username: string;

  @ApiProperty({
    description: 'The display name of the user',
    example: 'John Doe',
    required: false,
  })
  @IsOptional()
  @IsString()
  readonly displayName?: string;

  @ApiProperty({
    description: 'The password of the user',
    example: 'password123',
  })
  @IsString()
  readonly password: string; // Add password field for registration

  @ApiProperty({
    description: 'Role of the user',
    enum: ['USER', 'ADMIN'],
    default: 'USER',
  })
  @IsEnum(['USER', 'ADMIN'], { message: 'Role must be either USER or ADMIN' })
  readonly role: 'USER' | 'ADMIN' = 'USER';

  createdBy?: number;
  updatedBy?: number;
}

export class UpdateUserDto {
  @ApiProperty({
    description: 'The username of the user',
    example: 'john_doe',
    required: false,
  })
  @IsOptional()
  @IsString()
  readonly username?: string;

  @ApiProperty({
    description: 'The display name of the user',
    example: 'John Doe',
    required: false,
  })
  @IsOptional()
  @IsString()
  readonly displayName?: string;

  @ApiProperty({
    description: 'Role of the user',
    enum: ['USER', 'ADMIN'],
    required: false,
  })
  @IsOptional()
  @IsEnum(['USER', 'ADMIN'], { message: 'Role must be either USER or ADMIN' })
  readonly role?: 'USER' | 'ADMIN';

  @ApiProperty({
    description: 'The password of the user',
    example: 'password123',
  })
  @IsString()
  @IsOptional()
  readonly password?: string; // Add password field for registration

  @ApiProperty({
    description: 'active status of the user',
    example: true,
  })
  @IsBoolean()
  @IsOptional()
  isActive?: boolean; // Add password field for registration

  updatedBy?: number;
}
