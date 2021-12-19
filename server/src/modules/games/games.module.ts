import { Module } from '@nestjs/common';
import { UsersModule } from '../users/users.module';
import { GamesController } from './games.controller';
import { GamesService } from './games.service';

@Module({
  imports: [UsersModule],
  providers: [GamesService],
  controllers: [GamesController],
  exports: [],
})
export class GamesModule {}
