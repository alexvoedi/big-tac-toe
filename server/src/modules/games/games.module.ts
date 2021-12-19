import { Module } from '@nestjs/common';
import { GamesController } from './games.controller';

@Module({
  imports: [],
  providers: [],
  controllers: [GamesController],
  exports: [],
})
export class GamesModule {}
