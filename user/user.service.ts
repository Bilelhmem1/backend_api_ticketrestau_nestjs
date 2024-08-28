import {ConflictException, Injectable, NotFoundException} from '@nestjs/common';
import {UserSubscribeDto} from "./Dto/user-subscribe.Dto";
import {UserEntity} from "./entities/user.entity";
import {Repository} from 'typeorm';
import * as bcrypt from'bcrypt';
import {InjectRepository} from "@nestjs/typeorm";
import {loginCredentialsDto} from "./Dto/login-Credentials.Dto";
import { JwtService } from '@nestjs/jwt';
import { UpdateUserDto } from './Dto/update-user.dto';
@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity)
        private  userRepository:Repository<UserEntity>,
        private jwtService:JwtService
    ) {
    }

    async register(userData: UserSubscribeDto ):Promise<UserEntity>{
    const user:UserEntity= this.userRepository.create({
        ...userData
    });
    console.log(user);
    user.salt= await bcrypt.genSalt();
    user.password= await bcrypt.hash(user.password,user.salt);

        return  await this.userRepository.save(user);



    }
    async login (credentials: loginCredentialsDto){

        const {email,password}=credentials;
        const user= await this.userRepository.createQueryBuilder("user").where("user.email= :email ",{email}).getOne();

        if(!user) {
            throw new NotFoundException('email or password erronée');
        }
        const hashedPassword= await bcrypt.hash(password,user.salt);
        if (hashedPassword === user.password){
            
            
            
            const payload={
                firstname: user.firstname,
                lastname: user.lastname,
                email:user.email,
                Role: user.Role,
            }
            const jwt=await  this.jwtService.sign(payload);
            return{
                "access_token":jwt 
            }
        }else {
            throw new NotFoundException(`email or password erronée`);
        }
    }
    async softDelete(id:number){
        return await this.userRepository.softDelete(id);

    }
    async restoreUser(id:number){
       await this.userRepository.restore(id)
    }
    async  getList(): Promise<UserEntity[]>{
        return await  this.userRepository.find()
    }
    async updateUserByid (idu:number,user:UpdateUserDto):Promise<UserEntity>{

        const newUser= await this.userRepository.preload({
            idu,
            ...user
        });
        if(!newUser){
            throw  new NotFoundException(`User d'id ${idu} n'existe pas`)
        }

        return this.userRepository.save(newUser)
    }
    async countUsers(): Promise<number> {
        const count = await this.userRepository.count();
        return count;
      }

}
