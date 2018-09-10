import { Query, Resolver, Mutation, Args, Subscription } from '@nestjs/graphql'
import { PubSub } from 'graphql-subscriptions'
import { UsersService } from './users.service'
import { User } from './types/user.interface'
import { CreateUserDTO } from './dto/create-user.dto'

const pubSub = new PubSub()

@Resolver('User')
export class UsersResolvers {
  constructor(private readonly usersService: UsersService) {}

  @Query()
  async getUsers() {
    return await this.usersService.findAll()
  }

  @Mutation('createUser')
  async create(@Args() createUserDTO: CreateUserDTO): Promise<User> {
    const createdUser: User = await this.usersService.create(createUserDTO)
    pubSub.publish('userCreated', { userCreated: createdUser })
    return createdUser
  }

  @Subscription('userCreated')
  userCreated() {
    return {
      subscribe: () => pubSub.asyncIterator('userCreated'),
    }
  }
}
