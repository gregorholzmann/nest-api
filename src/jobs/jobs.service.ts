import { Injectable , Inject} from '@nestjs/common'
import { Job } from './types/job.interface'
import { Model } from 'mongoose'
import { CreateJobDTO } from './dto/create-job.dto'

@Injectable()
export class JobsService {
  constructor(@Inject('JobModelToken') private readonly jobModel: Model<Job>){}

  async create(createJobDTO: CreateJobDTO): Promise<Job> {
    console.log('createJobDTO', createJobDTO)
    const createdJob = new this.jobModel(createJobDTO)
    return await createdJob.save()
  }

  async findAll(): Promise<Job[]> {
    return await this.jobModel.find().exec()
  }
}
