import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { AlsModule } from './common/modules/als.module'
import { AsyncLocalStorage } from 'async_hooks'
import { LoggerModule } from './common/logger/logger.module'
import { LoggingInterceptor } from './common/interceptors/logging.interceptor'
import { APP_INTERCEPTOR } from '@nestjs/core'
import { traceMiddleware } from './common/middleware/trace.middleware'

@Module({
  imports: [AlsModule, LoggerModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor,
    },
  ],
})
export class AppModule implements NestModule {
  constructor(private readonly als: AsyncLocalStorage<Map<string, string>>) {}

  configure(consumer: MiddlewareConsumer) {
    consumer.apply(traceMiddleware(this.als)).forRoutes('*')
  }
}
