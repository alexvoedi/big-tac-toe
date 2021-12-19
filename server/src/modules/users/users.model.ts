import { randomUUID } from 'crypto';

export class User {
  id: string;
  name: string;

  constructor(name: string) {
    this.name = name;

    this.id = randomUUID()
  }
}
