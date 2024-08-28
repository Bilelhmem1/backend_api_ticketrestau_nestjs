import {ApiProperty} from '@nestjs/swagger'


import {IsEmail, IsNotEmpty} from "class-validator";
export  class  UserSubscribeDto{



    @IsNotEmpty()
    @ApiProperty({
        type: String,description: 'firstname'
    })
    firstname:string;
    @IsNotEmpty()
    @ApiProperty({
        type: String,description: 'lastname'
    })
    lastname:string;
    @IsNotEmpty()
    @ApiProperty({
        type: String,description: 'role'
    })
     Role:string;
    @IsNotEmpty()
    @ApiProperty({
        type: String,description: 'cin'
    })
    cin:string;
    @IsNotEmpty()
    @ApiProperty({
        type: String,description: 'tel'
    })
    tel:string;
    @IsNotEmpty()
    @IsEmail()
    @ApiProperty({
        type: String,description: 'email'
    })
    email:string;
    @IsNotEmpty()
    @ApiProperty({
        type: String,description: 'password'
    })
    password:string;


}