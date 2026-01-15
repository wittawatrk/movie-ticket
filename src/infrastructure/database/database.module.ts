import { Module } from '@nestjs/common';
import { PrismaService } from './services/prisma.service';
import { UserRepositoryService } from './services/user-repository.service';

const importsExports = [UserRepositoryService];
@Module({
  providers: [PrismaService, ...importsExports],
  exports: [PrismaService, ...importsExports],
})
export class DatabaseModule {
  static forRoot() {
    return {
      global: true,
      module: DatabaseModule,
    };
  }
}
