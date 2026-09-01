import { NestFactory } from '@nestjs/core';
import { AppModule } from '../src/app.module';
import { ValidationPipe } from '@nestjs/common';
import { ExpressAdapter } from '@nestjs/platform-express';
import express, { Express, Request, Response } from 'express';

const server: Express = express();
let isAppInitialized = false;

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule, new ExpressAdapter(server));
  
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  
  app.enableCors();

  await app.init();
  isAppInitialized = true;
}

export default async function handler(req: Request, res: Response): Promise<void> {
  if (!isAppInitialized) {
    await bootstrap();
  }
  server(req, res);
}