import { Player } from 'src/modules/players/players.model';
import { IBoard } from '../../../common/interfaces/Board';
import { Cell } from './Cell';

export class Board implements IBoard {
  size: number;
  cells: Cell[][];
  lastXY?: { x: number; y: number };

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
    this.lastXY = { x, y };
  }

  nInARow(n: number) {
    const lastCell = this.cells[this.lastXY.x][this.lastXY.y];

    const counter = [0, 0, 0, 0];

    for (let i = -(n - 1); i <= n - 1; i++) {
      const c1 = this.cells[this.lastXY.x + i]?.[this.lastXY.y];
      if (c1?.player === lastCell.player) counter[0]++;
      else counter[0] = 0;

      const c2 = this.cells[this.lastXY.x + i]?.[this.lastXY.y + i];
      if (c2?.player === lastCell.player) counter[1]++;
      else counter[1] = 0;

      const c3 = this.cells[this.lastXY.x]?.[this.lastXY.y + i];
      if (c3?.player === lastCell.player) counter[2]++;
      else counter[2] = 0;

      const c4 = this.cells[this.lastXY.x + i]?.[this.lastXY.y - i];
      if (c4?.player === lastCell.player) counter[3]++;
      else counter[3] = 0;

      if (counter.some((x) => x === n)) return true;
    }

    return false;
  }

  grow() {
    for (let i = 0; i < this.size; i++) {
      this.cells[i].unshift(new Cell());
      this.cells[i].push(new Cell());
    }

    this.size += 2;

    const topRow = [];
    for (let i = 0; i < this.size; i++) {
      topRow.push(new Cell());
    }
    this.cells.unshift(topRow);

    const bottomRow = [];
    for (let i = 0; i < this.size; i++) {
      bottomRow.push(new Cell());
    }
    this.cells.push(bottomRow);
  }
}
