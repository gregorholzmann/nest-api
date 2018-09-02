import { Injectable } from '@nestjs/common'
import { Job } from './types/job.interface'

@Injectable()
export class JobsService {
  private readonly jobs: Job[] = [{ id: 1, title: 'Boss', salary: 5, closeDate: '' }]

  create(job: Job): Job {
    this.jobs.push(job)
    return job
  }

  findAll(): Job[] {
    return this.jobs
  }

  findOneById(id: number): Job {
    return this.jobs.find(job => job.id === id)
  }
}
