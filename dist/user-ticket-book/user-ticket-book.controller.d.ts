import { UserTicketBookService } from './user-ticket-book.service';
import { UserTicketBookEntity } from './entities/user-ticket-book.entity';
import { UserTicketBookEntityDto } from './Dto/userTicketBook-entity.Dto';
import { UpdateUserTicketDto } from './Dto/update-UserTicket.dto';
export declare class UserTicketBookController {
    private userTicketBookService;
    constructor(userTicketBookService: UserTicketBookService);
    getList(): Promise<UserTicketBookEntity[]>;
    addTicketBook(adduserticket: UserTicketBookEntityDto): Promise<UserTicketBookEntity>;
    UpdateOrder(UpdateOrder: UpdateUserTicketDto, id: number): Promise<UserTicketBookEntity>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
    findAllByDate(date: string): Promise<UserTicketBookEntity[]>;
    TotalYear(year: number): Promise<number>;
    Totalmounth(year: number, mounth: number): Promise<number>;
}
