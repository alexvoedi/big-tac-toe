import { Cell } from './Cell'

export class Board {
  size: number
  cells: Cell[][]

  constructor() {
    this.size = 5

    this.initCells()
  }

  initCells() {
    this.cells = []

    for (let x = 0; x < this.size; x++) {
      this.cells[x] = []

      for (let y = 0; y < this.size; y++) {
        this.cells[x][y] = new Cell()
      }
    }
  }
}
