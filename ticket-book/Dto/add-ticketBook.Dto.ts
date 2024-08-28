import {Column} from "typeorm";
import {IsNotEmpty, IsString} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class  AddTicketBookDto{

@IsNotEmpty()
@IsString()
@ApiProperty({
    type: String,description: 'code_bar'
})

code: string;
@IsNotEmpty()
@ApiProperty({
    type: String,description: 'prix'
})

prix: number;



}