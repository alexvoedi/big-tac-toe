import { ConflictException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { User } from './users.model';

@Injectable()
export class UsersService {
  private users: User[]

  constructor() {
    this.users = []
  }

  createUser({ name }: CreateUserDto) {
    try {
      this.checkIfNameAlreadyExists(name)

      const user = new User(name)
      this.users.push(user)
      return user
    } catch (error) {
      return error
    }
  }

  private checkIfNameAlreadyExists(name: string) {
    const existingUser = this.users.find((user) => user.name === name)

    if (existingUser) throw new ConflictException('Name already exists')
  }

  getUserById(id: string) {
    return this.users.find((user) => user.id === id)
  }
}
