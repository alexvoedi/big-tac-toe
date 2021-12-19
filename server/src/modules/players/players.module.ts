import { Module } from '@nestjs/common';
import { PlayersController } from './players.controller';
import { PlayersService } from './players.service';

@Module({
  imports: [],
  providers: [PlayersService],
  controllers: [PlayersController],
  exports: [],
})
export class PlayersModule {}
