import { Module } from '@nestjs/common';
import { GamesModule } from './games/games.module';
import { PlayersModule } from './players/players.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule, GamesModule, PlayersModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
