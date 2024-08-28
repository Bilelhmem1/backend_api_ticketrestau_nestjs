import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cors from 'cors';

import {DocumentBuilder, SwaggerModule} from '@nestjs/swagger'
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const options= new DocumentBuilder().setTitle('DistruRestauTicket').setDescription('distrubution des ticketBook').setVersion('1.0.0')
      .addBearerAuth(
          {
            type: 'http',
            scheme: 'bearer',
            bearerFormat: 'Token',
          },
          'access-token',
      )
.build();
 const document= SwaggerModule.createDocument(app,options);
SwaggerModule.setup('api',app,document);
app.use(cors({
  origin: '*', // Allow only this origin
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  allowedHeaders: 'Content-Type, Accept',
}));
  await app.listen(3000);
}
bootstrap();
