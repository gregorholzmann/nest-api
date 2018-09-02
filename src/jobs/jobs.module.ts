import { Module } from '@nestjs/common'
import { JobsResolvers } from './jobs.resolvers'
import { JobsService } from './jobs.service'

@Module({
  providers: [JobsService, JobsResolvers],
})
export class JobsModule {}
