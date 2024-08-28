import {ApiProperty} from '@nestjs/swagger'

import {IsEmail, IsNotEmpty} from "class-validator";


export class loginCredentialsDto{

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