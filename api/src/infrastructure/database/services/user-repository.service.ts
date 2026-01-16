import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import * as bcrypt from 'bcrypt';
import {
  CreateUserDto,
  UpdateUserDto,
} from '../../../route/user/user.controller.dto';

@Injectable()
export class UserRepositoryService {
  constructor(private readonly prisma: PrismaService) {}
  async findUnique(username: string) {
    return this.prisma.user.findUnique({
      where: { username, isActive: true },
      include: { UserSecret: true },
    });
  }

  async create(createUserDto: CreateUserDto) {
    const { password, ...body } = createUserDto;
    return this.prisma.user.create({
      data: {
        ...body,
        UserSecret: {
          create: {
            hPassword: await bcrypt.hash(password, 20),
          },
        },
      },
    });
  }

  async findOne(id: string) {
    return this.prisma.user.findUnique({ where: { id: id } });
  }
  async update(id: string, updateUserDto: UpdateUserDto) {
    const { password, ...updateData } = updateUserDto;
    let hashedPassword = '';
    if (password) hashedPassword = await bcrypt.hash(password, 20);
    // Start a transaction to update both User and UserSecret if necessary
    return this.prisma.$transaction(async (prisma) => {
      // Update the user details first
      const userUpdate = prisma.user.update({
        data: { ...updateData },
        where: { id: id },
      });

      // If password is provided, hash it and update the UserSecret via the relation

      if (password) {
        const passwordUpdate = prisma.userSecret.update({
          where: { userId: id }, // Use userId to find the related UserSecret record
          data: {
            hPassword: hashedPassword,
          },
        });
        await passwordUpdate;
      }

      return userUpdate;
    });
  }

  async delete(id: string) {
    return this.prisma.user.delete({ where: { id: id } });
  }

  async findMany() {
    return this.prisma.user.findMany();
  }
}
