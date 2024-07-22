import { AsyncLocalStorage } from 'async_hooks'
import { Injectable, LoggerService } from '@nestjs/common'
import pinoLogger from 'pino'

const pino = pinoLogger({
  level: 'debug',
  transport: {
    target: 'pino-pretty',
    options: {
      colorize: true,
      translateTime: 'SYS:yyyy-mm-dd HH:MM:ss.l',
    },
  },
})

@Injectable()
export class AppLoggerService implements LoggerService {
  constructor(private readonly als: AsyncLocalStorage<Map<string, string>>) {}

  private getMessage(message: any, context?: string) {
    return context ? `[${context}] ${message}` : message
  }

  private getTraceId() {
    return this.als.getStore()?.get('traceId')
  }

  error(message: any, trace?: string, context?: string): any {
    const traceId = this.getTraceId()
    pino.error({ traceId }, this.getMessage(message, context))
    if (trace) {
      pino.error(trace)
    }
  }

  log(message: any, context?: string): any {
    const traceId = this.getTraceId()
    pino.info({ traceId }, this.getMessage(message, context))
  }

  warn(message: any, context?: string): any {
    const traceId = this.getTraceId()
    pino.warn({ traceId }, this.getMessage(message, context))
  }

  debug(message: any, context?: string): any {
    const traceId = this.getTraceId()
    pino.debug({ traceId }, this.getMessage(message, context))
  }
}
