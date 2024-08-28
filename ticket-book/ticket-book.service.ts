import {Injectable, NotFoundException} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {TicketBookEntity} from "./entities/ticket-book.entity";
import {Repository} from "typeorm";
import {AddTicketBookDto} from "./Dto/add-ticketBook.Dto";
import {UpdateTicketBookDto} from "./Dto/update-ticketBook.Dto";

@Injectable()
export class TicketBookService {
    constructor(
        @InjectRepository(TicketBookEntity)
        private ticketBookRepository: Repository<TicketBookEntity>
    ) {
    }
    async  getList(): Promise<TicketBookEntity[]>{
        return await  this.ticketBookRepository.find()
    }

    async  addTicketBook(ticketBook:AddTicketBookDto):Promise<TicketBookEntity>{

        return await this.ticketBookRepository.save(ticketBook)
    }

    async updateTicketBookByid (id:number,ticketBook:UpdateTicketBookDto):Promise<TicketBookEntity>{

        const newTicket= await this.ticketBookRepository.preload({
            id,
            ...ticketBook
        })
        if(!newTicket){
            throw  new NotFoundException(`TicketBook d'id ${id} n'existe pas`)
        }

        return this.ticketBookRepository.save(newTicket)
    }

    async deleteTicketBook(id:number){


        return await this.ticketBookRepository.delete(id);
    }
    async Updateticket(updateCriteria,ticket:UpdateTicketBookDto){
        return this.ticketBookRepository.update(updateCriteria,ticket);
    }


}
