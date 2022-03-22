import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

global['fetch'] = require('node-fetch');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.setGlobalPrefix('v1');

  const port = process.env.PORT || 5000;
  await app.listen(port, () => {
    console.log(`
      =================================================================
            App started at port ${port}
      =================================================================
    `);
  });
}
bootstrap();
