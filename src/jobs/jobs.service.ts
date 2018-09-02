import { Injectable } from '@nestjs/common'
import { Job, NewJob } from './types/job.interface'

@Injectable()
export class JobsService {
  private readonly jobs: Job[] = [{ id: 1, title: 'Boss', salary: 5}]

  create(newJob: NewJob): Job {
    const jobObj: Job = {
      ...newJob,
      id: this.getRandomInt(100)
    }
    this.jobs.push(jobObj)
    return jobObj
  }

  findAll(): Job[] {
    return this.jobs
  }

  findOneById(id: number): Job {
    return this.jobs.find(job => job.id === id)
  }

  private  getRandomInt(max: number): number {
    return Math.floor(Math.random() * Math.floor(max));
  }

}
