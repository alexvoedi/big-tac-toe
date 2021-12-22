import { IBoard } from './Board';
import { IPlayer } from "./Player";
import { ISettings } from './Settings';

export interface IGame {
  id: string;
  admin: IPlayer
  players: IPlayer[]
  board: IBoard
  settings: ISettings
}
