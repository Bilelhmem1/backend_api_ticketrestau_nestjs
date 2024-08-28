import { TicketBookService } from "./ticket-book.service";
import { TicketBookEntity } from "./entities/ticket-book.entity";
import { AddTicketBookDto } from "./Dto/add-ticketBook.Dto";
import { UpdateTicketBookDto } from "./Dto/update-ticketBook.Dto";
export declare class TicketBookController {
    private ticketBookService;
    constructor(ticketBookService: TicketBookService);
    getList(): Promise<TicketBookEntity[]>;
    addTicketBook(addticket: AddTicketBookDto): Promise<TicketBookEntity>;
    updateTicketBookByid(updatetic: UpdateTicketBookDto, id: number): Promise<TicketBookEntity>;
    Updateticket(updateObject: any): Promise<import("typeorm").UpdateResult>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
}
