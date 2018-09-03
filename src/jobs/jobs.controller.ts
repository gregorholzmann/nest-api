
import { Controller, Get, Post, Body } from '@nestjs/common'
import { CreateJobDTO } from './dto/create-job.dto'
import { JobsService } from './jobs.service'
import { Job } from './types/job.interface'

@Controller('jobs')
export class JobsController {
  constructor(private readonly jobsService: JobsService) {}

  @Post()
  async create(@Body() createJobDto: CreateJobDTO) {
    this.jobsService.create(createJobDto)
  }

  @Get()
  async findAll(): Promise<Job[]> {
    return this.jobsService.findAll()
  }
}
