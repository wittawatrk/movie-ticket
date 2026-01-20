import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { softDeleteMiddleware } from './prisma.middleware';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  constructor() {
    super({
      log: ['query', 'info', 'warn', 'error'], // Enable desired logs
    });
  }
  async onModuleInit() {
    this.$use(softDeleteMiddleware);
    await this.$connect();
  }
  async onModuleDestroy() {
    await this.$disconnect();
  }
}
