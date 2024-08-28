import { TicketBookEntity } from "./entities/ticket-book.entity";
import { Repository } from "typeorm";
import { AddTicketBookDto } from "./Dto/add-ticketBook.Dto";
import { UpdateTicketBookDto } from "./Dto/update-ticketBook.Dto";
export declare class TicketBookService {
    private ticketBookRepository;
    constructor(ticketBookRepository: Repository<TicketBookEntity>);
    getList(): Promise<TicketBookEntity[]>;
    addTicketBook(ticketBook: AddTicketBookDto): Promise<TicketBookEntity>;
    updateTicketBookByid(id: number, ticketBook: UpdateTicketBookDto): Promise<TicketBookEntity>;
    deleteTicketBook(id: number): Promise<import("typeorm").DeleteResult>;
    Updateticket(updateCriteria: any, ticket: UpdateTicketBookDto): Promise<import("typeorm").UpdateResult>;
}
