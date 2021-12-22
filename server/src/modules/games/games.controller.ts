import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { CreateGameDto } from './dtos/create-game.dto';
import { GamesService } from './games.service';
import { PlayerInputDto } from './dtos/player-input.dto';

@Controller('games')
export class GamesController {
  constructor(
    @Inject(GamesService)
    private readonly gamesService: GamesService,
  ) {}

  @Post()
  createGame(@Body() dto: CreateGameDto) {
    return this.gamesService.createGame(dto);
  }

  @Get()
  getGames() {
    return;
  }

  @Post(':id')
  input(@Param('id') id: string, @Body() dto: PlayerInputDto) {
    return this.gamesService.playerInput(id, dto);
  }
}
