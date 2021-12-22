import { Player } from 'src/modules/players/players.model';
import { IBoard } from '../../../common/interfaces/Board';
import { Cell } from './Cell';

export class Board implements IBoard {
  size: number;
  cells: Cell[][];

  constructor() {
    this.size = 5;

    this.initCells();
  }

  initCells() {
    this.cells = [];

    for (let x = 0; x < this.size; x++) {
      this.cells[x] = [];

      for (let y = 0; y < this.size; y++) {
        this.cells[x][y] = new Cell();
      }
    }
  }

  setPlayerForCell(x: number, y: number, player: Player) {
    const cell = this.cells[x][y];
    if (cell.player) throw new Error('Cell already taken');
    cell.player = player;
  }
}
