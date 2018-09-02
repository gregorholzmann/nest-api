import { ParseIntPipe, UseGuards } from '@nestjs/common'
import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql'
import { PubSub } from 'graphql-subscriptions'
import { JobsGuard } from './jobs.guard'
import { JobsService } from './jobs.service'
import { Job } from './types/job.interface'

const pubSub = new PubSub()

@Resolver('Job')
export class JobsResolvers {
  constructor(private readonly jobsService: JobsService) {}

  @Query()
  @UseGuards(JobsGuard)
  async getJobs() {
    return await this.jobsService.findAll()
  }

  @Query('job')
  async findOneById(
    @Args('id', ParseIntPipe)
    id: number,
  ): Promise<Job> {
    return await this.jobsService.findOneById(id)
  }

  @Mutation('createJob')
  async create(@Args() args: Job): Promise<Job> {
    const createdJob = await this.jobsService.create(args)
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
