import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import { UserModule } from './user/user.module';
import { TicketBookModule } from './ticket-book/ticket-book.module';
import { UserTicketBookModule } from './user-ticket-book/user-ticket-book.module';

@Module({
  imports: [
      TypeOrmModule.forRoot({
      type: 'mysql',
      host:'localhost',
        port:3306,
        username:'root',
        password:'',
        database:'app',
        entities:["dist/**/*.entity{.ts,.js}"],
        synchronize:true,

      }),
      UserModule,
      TicketBookModule,
      UserTicketBookModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
