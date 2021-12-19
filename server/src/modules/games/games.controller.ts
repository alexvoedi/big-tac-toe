import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { CreateGameDto } from './dtos/create-game.dto';
import { GamesService } from './games.service';

@Controller('games')
export class GamesController {
  constructor(
    @Inject(GamesService)
    private readonly gamesService: GamesService
  ) {}

  @Post()
  createGame(@Body() dto: CreateGameDto) {
    return this.gamesService.createGame(dto)
  }

  @Get()
  getGames() {
    return
  }
}
