import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';


async function bootstrap() {
const app = await NestFactory.create(AppModule);
app.enableCors({ 
  origin: [
    /localhost:3000$/, 
    /localhost:3001$/,
    /\.vercel\.app$/,
    /\.onrender\.com$/
  ] 
});
app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));
const port = process.env.PORT || 3001;
await app.listen(port);
}
bootstrap();