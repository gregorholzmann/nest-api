import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { JobsModule } from './jobs/jobs.module'
import { UsersModule } from './users/users.module'

@Module({
  imports: [
    JobsModule,
    UsersModule,
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
    })
  ],
})
export class AppModule {}
