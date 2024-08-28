import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query,UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UserTicketBookService } from './user-ticket-book.service';
import { UserTicketBookEntity } from './entities/user-ticket-book.entity';
import { UserTicketBookEntityDto } from './Dto/userTicketBook-entity.Dto';
import { UpdateUserTicketDto } from './Dto/update-UserTicket.dto';
import { JwtAuthGuard } from 'src/user/gurads/jwt-auth.gurad';
@ApiTags('user-ticket-book')
@Controller('user-ticket-book')
export class UserTicketBookController {

constructor(private userTicketBookService: UserTicketBookService){}

@Get('getList')
@UseGuards(JwtAuthGuard)
async getList():Promise<UserTicketBookEntity[]>{
    return await this.userTicketBookService.getListc();
}

@Post('add')
@UseGuards(JwtAuthGuard)
    async addTicketBook(
        @Body() adduserticket:UserTicketBookEntityDto
    ):Promise<UserTicketBookEntity>{
        return await this.userTicketBookService.addorder(adduserticket);
    }

    @Patch('Modifier/:id')
    @UseGuards(JwtAuthGuard)
    async UpdateOrder(
        @Body() UpdateOrder : UpdateUserTicketDto,
        @Param('id',ParseIntPipe) id:number
    ):Promise<UserTicketBookEntity>{


        return await this.userTicketBookService.updateorder(id,UpdateOrder);
    }
    @Delete('delete/:id')
    @UseGuards(JwtAuthGuard)
    async delete (
        @Param ('id',ParseIntPipe) id:number
    ){
        return await this.userTicketBookService.delete(id);

    }

    @Get('find')
    @UseGuards(JwtAuthGuard)
    async findAllByDate(@Query('date') date: string): Promise<UserTicketBookEntity[]> {
      const parsedDate = new Date(date); 
      return this.userTicketBookService.findOrdersByDate(parsedDate);
    }
@Get('totalYear/:year')
    @UseGuards(JwtAuthGuard)
    async TotalYear(
        @Param('year',ParseIntPipe) year:number
    ){


        return await this.userTicketBookService.getTotalByYear(year);
    }
    @Get('totalMounth/:year:mounth')
    @UseGuards(JwtAuthGuard)
    async Totalmounth(
        @Param('year',ParseIntPipe) year:number,
        @Param('mounth',ParseIntPipe) mounth:number,
    ){


        return await this.userTicketBookService.getTotalByMonth(year,mounth);
    }
    

}
