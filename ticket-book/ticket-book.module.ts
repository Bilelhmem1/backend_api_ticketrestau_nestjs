import { Module } from '@nestjs/common';
import { TicketBookController } from './ticket-book.controller';
import { TicketBookService } from './ticket-book.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import {TicketBookEntity} from "./entities/ticket-book.entity";

@Module({
  imports:[TypeOrmModule.forFeature([TicketBookEntity])],
  controllers: [TicketBookController],
  providers: [TicketBookService]
})
export class TicketBookModule {}
