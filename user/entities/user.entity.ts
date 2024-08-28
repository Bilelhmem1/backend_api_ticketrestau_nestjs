import{Entity} from 'typeorm/index'
import {PrimaryGeneratedColumn, Column, ManyToOne} from 'typeorm'

import { UserRoleEnum } from 'src/enums/user-role.enum';
import { IsNotEmpty } from 'class-validator';
import {TimestampEntity} from "../../generic/Timestamp.entity";
import {UserTicketBookEntity} from "../../user-ticket-book/entities/user-ticket-book.entity";
@Entity()
export class UserEntity extends TimestampEntity {
    @PrimaryGeneratedColumn()
    idu:number;
    @Column({
        type:'varchar',length:50
    })
    firstname:string;

    @Column()
    lastname:string;
    @IsNotEmpty()
    @Column(
        {type:'enum',
            enum:UserRoleEnum,
            default:UserRoleEnum.USER,

        })
    Role:string;
    @Column({type:'varchar',length:8})
        cin:string;
    @Column({type:'varchar',length:8})
    tel:string;
    @Column({type:'varchar',length:100})
    email:string;
    @Column({type:'varchar',length:255})
    password:string;
    @Column({type:'varchar',length:50})
    salt:string;

    
}
