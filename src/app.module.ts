import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { JobsModule } from './jobs/jobs.module'

@Module({
  imports: [
    JobsModule,
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
    })
  ],
})
export class AppModule {}
