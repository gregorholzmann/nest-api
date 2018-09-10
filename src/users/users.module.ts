import { Module } from '@nestjs/common'
import { UsersResolvers } from './users.resolvers'
import { UsersService } from './users.service'
import { usersProviders } from './users.providers'
import { DatabaseModule } from 'database/database.module'
import { UsersController} from './users.controller'

@Module({
  controllers: [
    UsersController
  ],
  providers: [
    UsersService,
    UsersResolvers,
    ...usersProviders
  ],
  imports: [
    DatabaseModule
  ]
})
export class UsersModule {}
