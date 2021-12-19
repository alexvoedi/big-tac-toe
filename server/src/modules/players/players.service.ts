import { Injectable } from '@nestjs/common';
import { Player } from './players.model';

@Injectable()
export class PlayersService {
  private players: Player[]

  constructor() {
    this.players = []
  }
}
