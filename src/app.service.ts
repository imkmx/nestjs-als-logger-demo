import { Injectable, Logger } from "@nestjs/common";

@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name)
  
  getHello(): string {
    this.logger.debug('debug')
    return 'hello'
  }
  
  getError(): string {
    throw new Error('App service error')
  }
}
