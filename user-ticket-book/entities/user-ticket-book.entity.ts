
import {Entity,PrimaryGeneratedColumn,Column,ManyToOne} from 'typeorm'
import {TimestampEntity} from "../../generic/Timestamp.entity";
import {UserEntity} from "../../user/entities/user.entity";
import {TicketBookEntity} from "../../ticket-book/entities/ticket-book.entity";

@Entity()
export class UserTicketBookEntity extends TimestampEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    payed_amount: number;


    @ManyToOne(() => UserEntity, (UserEntity) => UserEntity.idu)
    public UserEntity: UserEntity

    @ManyToOne(() => TicketBookEntity, (TicketBookEntity) => TicketBookEntity.id)
    public TicketBookEntity:TicketBookEntity

}