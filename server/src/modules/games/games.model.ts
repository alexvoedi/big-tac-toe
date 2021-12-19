import { Board } from 'src/classes/Board';
import emojis from 'src/helpers/emojis';
import { Player } from '../players/players.model';
import { User } from '../users/users.model';

export class Game {
  private availableEmojis: string[]

  admin: Player
  players: Player[]
  board: Board

  constructor(admin: User) {
    this.availableEmojis = [...emojis]
    this.players = []
    this.admin = this.addPlayer(admin)

    this.board = new Board()
  }

  addPlayer(user: User) {
    if (this.availableEmojis.length === 0) throw new Error('No more emojis available')

    const [emoji] = this.availableEmojis.splice(Math.floor(Math.random() * this.availableEmojis.length), 1)

    const player = new Player(user, emoji)
    this.players.push(player)
    return player
  }
}
