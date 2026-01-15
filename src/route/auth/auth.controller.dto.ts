import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class LoginDto {
  @ApiProperty({
    description: 'The username of the user',
    example: 'john_doe',
  })
  @IsString()
  username: string;

  @ApiProperty({
    description: 'The password of the user',
    example: '123456',
  })
  @IsString()
  password: string;
}

export class LoginResponseDto {
  access_token: string;
}
