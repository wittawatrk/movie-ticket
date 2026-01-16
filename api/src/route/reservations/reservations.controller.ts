import {
  Controller,
  Post,
  Delete,
  Get,
  Param,
  Body,
  Req,
  UseGuards,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { JwtAuthGuard } from '../../domain/auth/jwt-auth.guard';
import { RoleGuard } from '../../domain/auth/role.gaurd';
import { ReservationsService } from '../../domain/reservations/reservations.service';
import { Roles } from '../../domain/auth/roles.decorator';
import { ReserveSeatDto } from './reservations.controller.dto';

@ApiTags('Reservations')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, RoleGuard)
@Controller('reservations')
export class ReservationsController {
  constructor(private readonly service: ReservationsService) {}

  // ---------- USER ----------

  @Post()
  @Roles('USER')
  @ApiOperation({ summary: 'Reserve 1 seat for a concert' })
  @ApiResponse({ status: 201, description: 'Seat reserved successfully' })
  @ApiResponse({ status: 400, description: 'Sold out or already reserved' })
  reserve(@Req() req, @Body() dto: ReserveSeatDto) {
    console.log(req.user);
    return this.service.reserve(req.user.userId, dto.concertId);
  }

  @Delete(':id')
  @Roles('USER')
  @ApiOperation({ summary: 'Cancel reservation' })
  @ApiResponse({ status: 200, description: 'Reservation cancelled' })
  cancel(@Req() req, @Param('id') reservationId: string) {
    return this.service.cancel(req.user.userId, reservationId);
  }

  @Get('me')
  @Roles('USER')
  @ApiOperation({ summary: 'Get my reservation history' })
  @ApiResponse({ status: 200, description: 'My reservation list' })
  myHistory(@Req() req) {
    return this.service.myHistory(req.user.userId);
  }

  // ---------- ADMIN ----------

  @Get('admin/all')
  @Roles('ADMIN')
  @ApiOperation({ summary: 'Get all users reservation history (Admin)' })
  @ApiResponse({ status: 200, description: 'All reservations' })
  allHistory() {
    return this.service.allHistory();
  }
}
