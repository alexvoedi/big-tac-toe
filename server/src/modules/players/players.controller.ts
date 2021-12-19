import { Body, Controller, Post } from '@nestjs/common';
import { CreatePlayerDto } from './dtos/create-player.dto';

@Controller('players')
export class PlayersController {
  @Post()
  async createPlayer(@Body() dto: CreatePlayerDto) {
    return dto
  }
}
