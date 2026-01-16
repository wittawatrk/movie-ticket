import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseGuards,
  Put,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

import { CreateUserDto, UpdateUserDto } from './user.controller.dto';
import { UserService } from '../../domain/user/user.service';
import { JwtAuthGuard } from '../../domain/auth/jwt-auth.guard';
import { RoleGuard } from '../../domain/auth/role.gaurd';
import { Roles } from '../../domain/auth/roles.decorator';
import { User } from '../../domain/auth/user.decorator';
import * as jwtPayloadInterface from '../../domain/auth/jwt-payload.interface';

@ApiTags('users')
@Controller({
  version: '1',
  path: 'users',
})
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(
    @User() user: jwtPayloadInterface.JwtPayload,
    @Body() createUserDto: CreateUserDto,
  ) {
    const payload: CreateUserDto = {
      ...createUserDto,
      createdBy: user?.userId ?? null,
      updatedBy: user?.userId ?? null,
    };
    return this.userService.create(payload);
  }

  @Roles('ADMIN')
  @UseGuards(JwtAuthGuard, RoleGuard)
  @ApiBearerAuth()
  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Roles('ADMIN', 'USER')
  @UseGuards(JwtAuthGuard, RoleGuard)
  @ApiBearerAuth()
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  @Roles('ADMIN', 'USER')
  @UseGuards(JwtAuthGuard, RoleGuard)
  @ApiBearerAuth()
  @Put(':id')
  update(
    @User() user: jwtPayloadInterface.JwtPayload,
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    const payload: UpdateUserDto = {
      ...updateUserDto,
      updatedBy: user?.userId ?? null,
    };
    return this.userService.update(id, payload);
  }

  @Roles('ADMIN')
  @UseGuards(JwtAuthGuard, RoleGuard)
  @ApiBearerAuth()
  @Delete(':id')
  @Roles('ADMIN')
  @UseGuards(JwtAuthGuard, RoleGuard)
  @ApiBearerAuth()
  remove(@Param('id') id: string) {
    return this.userService.remove(id);
  }
}
