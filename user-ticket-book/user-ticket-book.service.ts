import { Injectable, NotFoundException } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {UserTicketBookEntity} from "./entities/user-ticket-book.entity";
import {UserTicketBookEntityDto} from "./Dto/userTicketBook-entity.Dto";
import { UpdateUserTicketDto } from './Dto/update-UserTicket.dto';

@Injectable()
export class UserTicketBookService   {

    constructor(
        @InjectRepository(UserTicketBookEntity)
        private userticketBookRepository: Repository<UserTicketBookEntity>
    ) {
    }
    async  getListc(): Promise<UserTicketBookEntity[]>{
        return await  this.userticketBookRepository.find()
    }

    async  addorder(userticketBook:UserTicketBookEntityDto):Promise<UserTicketBookEntity>{

        return await this.userticketBookRepository.save(userticketBook)
    }
    async updateorder (id:number,userticketBook:UpdateUserTicketDto):Promise<UserTicketBookEntity>{

        const newUserTicket= await this.userticketBookRepository.preload({
            id,
            ...userticketBook
        })
        if(!newUserTicket){
            throw  new NotFoundException(`userTicketBook d'id ${id} n'existe pas`)
        }

        return this.userticketBookRepository.save(newUserTicket)
    }

    async findOrdersByDate(date: Date): Promise<UserTicketBookEntity[]> {
        return this.userticketBookRepository.find({
          where: {
            createAt: date, 
          },
        });
      }


      async delete(id:number){
        return await this.userticketBookRepository.delete(id);
    }

    async getTotalByMonth(year: number, month: number) {
       const transactions = await this.userticketBookRepository
          .createQueryBuilder('transaction')
          .where('YEAR(transaction.createAt) = :year', { year })
          .andWhere('MONTH(transaction.createAt) = :month', { month })
          .getMany();
      
    
        return transactions.reduce((total, transaction) => total + transaction.payed_amount, 0);
      }

      async getTotalByYear(year: number) {
        const transactions = await this.userticketBookRepository
          .createQueryBuilder('transaction')
          .where('YEAR(transaction.createAt) = :year', { year })
          .getMany();
      
        
        return transactions.reduce((total, transaction) => total + transaction.payed_amount, 0);
      }
}
