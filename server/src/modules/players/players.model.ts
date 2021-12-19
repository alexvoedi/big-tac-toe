import { User } from '../users/users.model';

export class Player {
  user: User;
  emoji: string;
  lastInput?: Date;

  constructor(user: User, emoji: string) {
    this.user = user
    this.emoji = emoji
  }
}
