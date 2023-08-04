import { MiddlewareConsumer, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import DatabaseModule from './database/database.module';
import { AuthMiddleware } from './middleware/auth.middleware';
import routes from './middleware/routes.middleware';
import { UserModule } from './user/user.module';

@Module({
  imports: [UserModule, DatabaseModule, ConfigModule.forRoot()],
  controllers: [],
  providers: [],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes(...routes);
  }
}
