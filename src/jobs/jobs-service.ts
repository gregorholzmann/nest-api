import { Injectable } from '@nestjs/common'
import { Job } from './types/job.interface'

@Injectable()
export class JobsService {
  private readonly jobs: Job[] = []

  create(job: Job) {
    this.jobs.push(job)
  }

  findAll(): Job[] {
    return this.jobs
  }
}
