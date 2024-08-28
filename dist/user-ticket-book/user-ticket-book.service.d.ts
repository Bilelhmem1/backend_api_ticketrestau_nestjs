import { Repository } from "typeorm";
import { UserTicketBookEntity } from "./entities/user-ticket-book.entity";
import { UserTicketBookEntityDto } from "./Dto/userTicketBook-entity.Dto";
import { UpdateUserTicketDto } from './Dto/update-UserTicket.dto';
export declare class UserTicketBookService {
    private userticketBookRepository;
    constructor(userticketBookRepository: Repository<UserTicketBookEntity>);
    getListc(): Promise<UserTicketBookEntity[]>;
    addorder(userticketBook: UserTicketBookEntityDto): Promise<UserTicketBookEntity>;
    updateorder(id: number, userticketBook: UpdateUserTicketDto): Promise<UserTicketBookEntity>;
    findOrdersByDate(date: Date): Promise<UserTicketBookEntity[]>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
    getTotalByMonth(year: number, month: number): Promise<number>;
    getTotalByYear(year: number): Promise<number>;
}
