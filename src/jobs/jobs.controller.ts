import { Controller, Get, Post, Param, Query, Put, Body, Delete } from '@nestjs/common'
import { CreateJobDTO} from './types/create-job.dto'

@Controller('jobs')
export class JobsController {
  @Post()
  create(@Body() createJobDTO: CreateJobDTO): string {
    return 'This action adds a new job'
  }

  @Get()
  findAll(@Query() query) {
    return  `This action returns all jobs (limit: ${query.limit} items)`;
  }

  @Get(':id')
  findOne(@Param('id') id): string {
    console.log(id);
    return `This action returns a #${id} job`
  }

  @Put(':id')
  update(@Param('id') id, @Body() updateJobDTO) {
    return `This action updates a #${id} job`;
  }

  @Delete(':id')
  remove(@Param('id') id) {
    return `This action removes a #${id} job`;
  }
}
