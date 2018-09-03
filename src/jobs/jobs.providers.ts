
import { Connection } from 'mongoose'
import { JobSchema } from './schemas/job.schema'

export const jobsProviders = [
  {
    provide: 'JobModelToken',
    useFactory: (connection: Connection) => connection.model('Job', JobSchema),
    inject: ['DbConnectionToken'],
  },
]
