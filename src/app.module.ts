import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    UsersModule,
    MongooseModule.forRoot(
      'mongodb+srv://guilbd:NyPFum4per1XdsWJ@cluster0.jq6gs.mongodb.net/test',
    ),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
