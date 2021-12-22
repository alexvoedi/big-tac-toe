import { randomUUID } from 'crypto';
import { IUser } from '../../../../common/interfaces/User';

export class User implements IUser {
  id: string;
  name: string;

  constructor(name: string) {
    this.name = name;

    this.id = randomUUID();
  }
}
