import {Body, Controller, Get, Post, Patch, Param, ParseIntPipe, Delete, UseGuards} from '@nestjs/common';
import {TicketBookService} from "./ticket-book.service";
import {TicketBookEntity} from "./entities/ticket-book.entity";
import {AddTicketBookDto} from "./Dto/add-ticketBook.Dto";
import {UpdateTicketBookDto} from "./Dto/update-ticketBook.Dto";
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/user/gurads/jwt-auth.gurad';
@ApiTags('TicketBook')
@Controller('ticket-book')
export class TicketBookController {
    constructor(private ticketBookService: TicketBookService) {

    }
    @Get('getList')
    @UseGuards(JwtAuthGuard)
    async getList():Promise<TicketBookEntity[]>{
        return await this.ticketBookService.getList();
    }
    @Post('addTicketBook')
    @UseGuards(JwtAuthGuard)
    async addTicketBook(
        @Body() addticket:AddTicketBookDto
    ):Promise<TicketBookEntity>{
        return await this.ticketBookService.addTicketBook(addticket)
    }

    @Patch('updateTicketBookById/:id')
    @UseGuards(JwtAuthGuard)
    async updateTicketBookByid (
        @Body() updatetic:UpdateTicketBookDto,
        @Param('id',ParseIntPipe) id:number
    ):Promise<TicketBookEntity>{
        return await  this.ticketBookService.updateTicketBookByid(id,updatetic)
    }
    @Patch('update')
    @UseGuards(JwtAuthGuard)
    async Updateticket(
        @Body() updateObject,
    ){
        const {updateCriteria,UpdateTicketBookDto}=updateObject
        return await this.ticketBookService.Updateticket(updateCriteria,UpdateTicketBookDto);
    }

    @Delete('delete/:id')
    @UseGuards(JwtAuthGuard)
    async delete (
        @Param ('id',ParseIntPipe) id:number
    ){
        return await this.ticketBookService.deleteTicketBook(id);
    }


}
