import { IPlayer } from '../../../../common/interfaces/Player';
import { User } from '../users/users.model';

export class Player implements IPlayer {
  user: User;
  emoji: string;
  lastInput: Date;

  constructor(user: User, emoji: string) {
    this.user = user;
    this.emoji = emoji;
  }
}
