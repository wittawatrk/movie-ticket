import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './infrastructure/database/database.module';
import { RoutesModule } from './route/routes.module';
import { AuthModule } from './domain/auth/auth.module';
import { UserModule } from './route/user/user.module';

@Module({
  imports: [DatabaseModule.forRoot(), RoutesModule, AuthModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
