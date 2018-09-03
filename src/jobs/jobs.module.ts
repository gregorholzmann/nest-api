import { Module } from '@nestjs/common'
import { JobsResolvers } from './jobs.resolvers'
import { JobsService } from './jobs.service'
import { jobsProviders } from './jobs.providers'
import { JobsController } from './jobs.controller'
import { DatabaseModule } from 'database/database.module'

@Module({
  controllers: [
    JobsController
  ],
  providers: [
    JobsService,
    JobsResolvers,
    ...jobsProviders
  ],
  imports: [
    DatabaseModule
  ]
})
export class JobsModule {}
