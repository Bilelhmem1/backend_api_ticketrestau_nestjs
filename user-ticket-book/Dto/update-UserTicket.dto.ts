import {IsOptional, IsString} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";


export class UpdateUserTicketDto{
     @IsOptional()
    payed_amount: number;




}