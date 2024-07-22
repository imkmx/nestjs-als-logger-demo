import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common'
import { Observable } from 'rxjs'
import { tap } from 'rxjs/operators'
import { AppLoggerService } from '../logger/app-logger.service'

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  constructor(private readonly logger: AppLoggerService) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest()
    const { method, url } = request
    const now = Date.now()
    
    const handler = context.getHandler().name;
    const controller = context.getClass().name;
    
    this.logger.log(`[${controller}.${handler}] Incoming request: ${method} ${url}`);

    return next
      .handle()
      .pipe(
        tap(() =>
          this.logger.log(
            `[${controller}.${handler}] Request to ${method} ${url} completed in ${Date.now() - now}ms `,
          ),
        ),
      )
  }
}
