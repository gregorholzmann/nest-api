import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { JobsController } from './jobs/jobs.controller'
import { AppService } from './app.service'

@Module({
  imports: [],
  controllers: [
    AppController,
    JobsController
  ],
  providers: [AppService],
})
export class AppModule {}
