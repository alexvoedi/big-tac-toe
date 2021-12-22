import { Board } from '../../classes/Board';
import emojis from '../../helpers/emojis';
import { Player } from '../players/players.model';
import { Settings } from '../settings/settings.model';
import { User } from '../users/users.model';
import { IGame } from '../../../../common/interfaces/Game';
import { randomUUID } from 'crypto';

export class Game implements IGame {
  availableEmojis: string[];

  id: string;
  admin: Player;
  players: Player[];
  board: Board;
  settings: Settings;

  constructor(admin: User, settings: Settings) {
    this.id = randomUUID();
    this.availableEmojis = [...emojis];
    this.players = [];
    this.admin = this.addPlayer(admin);
    this.settings = settings;

    this.board = new Board();
  }

  addPlayer(user: User) {
    if (this.availableEmojis.length === 0)
      throw new Error('No more emojis available');

    const [emoji] = this.availableEmojis.splice(
      Math.floor(Math.random() * this.availableEmojis.length),
      1,
    );

    const player = new Player(user, emoji);
    this.players.push(player);
    return player;
  }
}
