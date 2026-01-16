import {
  Controller,
  Post,
  Delete,
  Get,
  Body,
  Param,
  UseGuards,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { JwtAuthGuard } from '../../domain/auth/jwt-auth.guard';
import { Roles } from '../../domain/auth/roles.decorator';
import { RoleGuard } from '../../domain/auth/role.gaurd';
import { CreateConcertDto } from './concerts.controller.dto';
import { ConcertService } from '../../domain/concert/concert.service';

@ApiTags('Admin - Concerts')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, RoleGuard)
@Controller('concerts')
export class ConcertsController {
  constructor(private readonly service: ConcertService) {}

  @Post()
  @Roles('ADMIN')
  @ApiOperation({ summary: 'Create a new concert' })
  @ApiResponse({ status: 201, description: 'Concert created successfully' })
  @ApiResponse({ status: 403, description: 'Forbidden (Admin only)' })
  create(@Body() dto: CreateConcertDto) {
    return this.service.create(dto);
  }

  @Delete(':id')
  @Roles('ADMIN')
  @ApiOperation({ summary: 'Delete a concert by ID' })
  @ApiResponse({ status: 200, description: 'Concert deleted successfully' })
  @ApiResponse({ status: 404, description: 'Concert not found' })
  remove(@Param('id') id: string) {
    return this.service.delete(id);
  }

  @Get()
  @Roles('ADMIN', 'USER')
  @ApiOperation({ summary: 'Get all concerts (Admin view)' })
  @ApiResponse({ status: 200, description: 'List of concerts returned' })
  findAll() {
    return this.service.findAll();
  }
}
