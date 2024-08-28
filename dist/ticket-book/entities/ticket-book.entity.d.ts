import { TimestampEntity } from "../../generic/Timestamp.entity";
import { UserTicketBookEntity } from 'src/user-ticket-book/entities/user-ticket-book.entity';
export declare class TicketBookEntity extends TimestampEntity {
    id: number;
    code: string;
    prix: number;
    UserTicketBookEntity: UserTicketBookEntity[];
}
