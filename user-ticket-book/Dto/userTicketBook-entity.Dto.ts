import {ApiProperty} from '@nestjs/swagger'
import {IsNotEmpty} from "class-validator";


export class UserTicketBookEntityDto{


    @IsNotEmpty()
    @ApiProperty({
        type: String,description: 'payed_amount'
    })

    payed_amount: number;
}