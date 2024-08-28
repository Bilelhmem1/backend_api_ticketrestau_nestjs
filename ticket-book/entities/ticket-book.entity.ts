import {Entity,PrimaryGeneratedColumn,Column,OneToMany,JoinTable} from 'typeorm'
import {TimestampEntity} from "../../generic/Timestamp.entity";
import {UserTicketBookEntity} from 'src/user-ticket-book/entities/user-ticket-book.entity'



@Entity('ticket-book')
export class TicketBookEntity extends TimestampEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        unique:true
    })
    code: string;
    @Column()
    prix: number;
    @OneToMany(() => UserTicketBookEntity,UserTicketBookEntity => UserTicketBookEntity.id)
    public UserTicketBookEntity: UserTicketBookEntity[];
}
