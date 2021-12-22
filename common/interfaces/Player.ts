import { IUser } from './User'

export interface IPlayer {
  user: IUser;
  emoji: string;
  lastInput: Date;
}
