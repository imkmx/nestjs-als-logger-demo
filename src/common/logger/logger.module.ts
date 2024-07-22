import { Module } from '@nestjs/common'
import { AppLoggerService } from './app-logger.service'
import { AlsModule } from '../modules/als.module'

@Module({
  imports: [AlsModule],
  providers: [AppLoggerService],
  exports: [AppLoggerService],
})
export class LoggerModule {}
