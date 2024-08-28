import { Module } from '@nestjs/common';
import { UserTicketBookController } from './user-ticket-book.controller';
import { UserTicketBookService } from './user-ticket-book.service';
import {TypeOrmModule} from '@nestjs/typeorm'
import {UserTicketBookEntity} from "./entities/user-ticket-book.entity";
@Module({
  imports:[TypeOrmModule.forFeature([UserTicketBookEntity])],
  controllers: [UserTicketBookController],
  providers: [UserTicketBookService]
})
export class UserTicketBookModule {}
