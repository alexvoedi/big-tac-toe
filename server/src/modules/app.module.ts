import { Module } from '@nestjs/common';
import { GamesModule } from './games/games.module';
import { PlayersModule } from './players/players.module';

@Module({
  imports: [GamesModule, PlayersModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
