import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';

const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const dbChar = process.env.DB_CHAR;

@Module({
  imports: [
    UsersModule,
    MongooseModule.forRoot(
      `mongodb+srv://${dbUser}:${dbPassword}@cluster0.${dbChar}.mongodb.net/test`,
    ),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
