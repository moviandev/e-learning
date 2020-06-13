import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import process = require('process');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 9000;
  await app.listen(port);
}

bootstrap();
