import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { AppLoggerService } from './common/logger/app-logger.service'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.useLogger(app.get(AppLoggerService))
  await app.listen(3000)
}
bootstrap()
