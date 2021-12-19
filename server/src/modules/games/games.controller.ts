import { Controller, Get } from '@nestjs/common';

@Controller('games')
export class GamesController {
  @Get()
  getGames() {
    return { state: 'test'}
  }
}
