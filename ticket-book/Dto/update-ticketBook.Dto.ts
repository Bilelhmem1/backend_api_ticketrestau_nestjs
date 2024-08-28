import {IsOptional, IsString} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";


export class UpdateTicketBookDto{
    @IsOptional()
    @IsString()
    @ApiProperty({
        type: String,description: 'code_bar'
    })

    code:string;
    @IsOptional()
    @ApiProperty({
        type: String,description: 'prix'
    })

    prix:number




}