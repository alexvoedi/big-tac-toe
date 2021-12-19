import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Player } from '../players/players.model';
import { UsersService } from '../users/users.service';
import { CreateGameDto } from './dtos/create-game.dto';
import { Game } from './games.model';

@Injectable()
export class GamesService {
  private games: Game[]

  constructor(
    @Inject(UsersService)
    private readonly usersService: UsersService
  ) {
    this.games = []
  }

  createGame(dto: CreateGameDto) {
    const admin = this.usersService.getUserById(dto.admin)

    if (!admin) throw new NotFoundException('User does not exist')

    const game = new Game(admin)

    this.games.push(game)

    return game
  }
}
