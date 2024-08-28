import { TimestampEntity } from "../../generic/Timestamp.entity";
import { UserEntity } from "../../user/entities/user.entity";
import { TicketBookEntity } from "../../ticket-book/entities/ticket-book.entity";
export declare class UserTicketBookEntity extends TimestampEntity {
    id: number;
    payed_amount: number;
    UserEntity: UserEntity;
    TicketBookEntity: TicketBookEntity;
}
