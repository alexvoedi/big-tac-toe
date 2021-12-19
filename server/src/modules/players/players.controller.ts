import { Controller, Inject, Post } from '@nestjs/common';
import { PlayersService } from './players.service';

@Controller('players')
export class PlayersController {
  constructor(
    @Inject(PlayersService)
    private readonly playersService: PlayersService
  ) {}

  @Post()
  async createPlayer() {
    return
  }
}
