import { UseGuards } from '@nestjs/common'
import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql'
import { PubSub } from 'graphql-subscriptions'
import { JobsGuard } from './jobs.guard'
import { JobsService } from './jobs.service'
import { Job } from './types/job.interface'
import { CreateJobDTO } from './dto/create-job.dto'

const pubSub = new PubSub()

@Resolver('Job')
export class JobsResolvers {
  constructor(private readonly jobsService: JobsService) {}

  @Query()
  @UseGuards(JobsGuard)
  async getJobs() {
    return await this.jobsService.findAll()
  }

  @Mutation('createJob')
  async create(@Args() createJobDto: CreateJobDTO): Promise<Job> {
    const createdJob: Job = await this.jobsService.create(createJobDto)
    pubSub.publish('jobCreated', { jobCreated: createdJob })
    return createdJob
  }

  @Subscription('jobCreated')
  jobCreated() {
    return {
      subscribe: () => pubSub.asyncIterator('jobCreated'),
    }
  }
}
