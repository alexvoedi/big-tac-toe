import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import * as dayjs from 'dayjs';
import { Settings } from '../settings/settings.model';
import { UsersService } from '../users/users.service';
import { CreateGameDto } from './dtos/create-game.dto';
import { PlayerInputDto } from './dtos/player-input.dto';
import { Game } from './games.model';

@Injectable()
export class GamesService {
  private games: Game[];

  constructor(
    @Inject(UsersService)
    private readonly usersService: UsersService,
  ) {
    this.games = [];
  }

  createGame(dto: CreateGameDto) {
    const admin = this.usersService.getUserById(dto.admin);

    if (!admin) throw new NotFoundException('User does not exist');

    const settings = new Settings();
    const game = new Game(admin, settings);

    this.games.push(game);

    return game;
  }

  getGameById(id: string) {
    return this.games.find((game) => game.id === id);
  }

  playerInput(gameId: string, dto: PlayerInputDto) {
    const game = this.getGameById(gameId);
    const player = game.players.find((player) => player.user.id === dto.id);

    if (player.lastInput) {
      const nextInputTime = dayjs(player.lastInput).add(
        game.settings.timeBetweenInputs,
        's',
      );

      const inputAllowed = dayjs().isAfter(nextInputTime);

      if (!inputAllowed)
        throw new Error(
          `Too fast! Wait ${nextInputTime.diff(new Date(), 's')}`,
        );
    }

    game.board.setPlayerForCell(dto.x, dto.y, player);
    player.lastInput = new Date();

    console.log(this.checkWinCondition(game));

    return game.board;
  }

  checkWinCondition(game: Game) {
    return game.board.nInARow(game.settings.nInARow);
  }
}
