import { Player } from '../modules/players/players.model';
import { ICell } from '../../../common/interfaces/Cell';

export class Cell implements ICell {
  player?: Player;
}
