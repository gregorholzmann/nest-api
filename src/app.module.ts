import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { JobsModule } from './jobs/jobs.module'
import { UsersModule } from './users/users.module'
import { CorsMiddleware } from '@nest-middlewares/cors'

@Module({
  imports: [
    JobsModule,
    UsersModule,
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
    })
  ]
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(CorsMiddleware).forRoutes('jobs', 'users');
}
}
