import {Body, Controller, Post, Delete,Get,Param,ParseIntPipe,UsePipes, UseGuards, Patch} from '@nestjs/common';
import {UserSubscribeDto} from "./Dto/user-subscribe.Dto";
import {UserEntity} from "./entities/user.entity";
import {UserService} from "./user.service";
import {loginCredentialsDto} from "./Dto/login-Credentials.Dto";
import {ApiBody, ApiCreatedResponse, ApiOkResponse, ApiResponse, ApiUnauthorizedResponse} from '@nestjs/swagger'
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from './gurads/jwt-auth.gurad';
import { UpdateUserDto } from './Dto/update-user.dto';
@ApiTags('user')
@Controller('user')
export class UserController {

constructor(
    private userService: UserService
) {
}
    @Post('register')
    @UseGuards(JwtAuthGuard)
    @ApiCreatedResponse({
        description:'user registred'
    })
    @ApiBody({
        type:UserSubscribeDto
    })
    Register(
        @Body() userData: UserSubscribeDto
    ){

        return this.userService.register(userData);
    }

    @Post('login')
    @ApiOkResponse({
        description: 'user login'
    })
    @ApiUnauthorizedResponse({
        description:'invalid credentials'
    })
    @ApiBody({
        type:loginCredentialsDto
    })

    login(
        @Body() credentials:loginCredentialsDto
    ){

        return this.userService.login(credentials);
    }

    @Delete('delete/:id')
    @UseGuards(JwtAuthGuard)
    async softdelete (
        @Param ('id',ParseIntPipe) id:number
    ){
        return await this.userService.softDelete(id);
    }
    @Get('recover/:id')
    @UseGuards(JwtAuthGuard)
    async restoruser(
        @Param('id',ParseIntPipe) id:number
    ){
        return await this.userService.restoreUser(id);
    }
    @Get('getList')
    @UseGuards(JwtAuthGuard)
    async getList():Promise<UserEntity[]>{
        return await this.userService.getList();
    }
    @Patch('update/:id')
    @UseGuards(JwtAuthGuard)
    async updateuser(
        @Param('id',ParseIntPipe) id:number,
        @Body() user: UpdateUserDto,
    ){
        return await this.userService.updateUserByid(id,user);
    }

    @Get('nombreUser')
    @UseGuards(JwtAuthGuard)
    async nbUser(){
        return await this.userService.countUsers();
    }

}
