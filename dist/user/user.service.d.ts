import { UserSubscribeDto } from "./Dto/user-subscribe.Dto";
import { UserEntity } from "./entities/user.entity";
import { Repository } from 'typeorm';
import { loginCredentialsDto } from "./Dto/login-Credentials.Dto";
import { JwtService } from '@nestjs/jwt';
import { UpdateUserDto } from './Dto/update-user.dto';
export declare class UserService {
    private userRepository;
    private jwtService;
    constructor(userRepository: Repository<UserEntity>, jwtService: JwtService);
    register(userData: UserSubscribeDto): Promise<UserEntity>;
    login(credentials: loginCredentialsDto): Promise<{
        access_token: string;
    }>;
    softDelete(id: number): Promise<import("typeorm").UpdateResult>;
    restoreUser(id: number): Promise<void>;
    getList(): Promise<UserEntity[]>;
    updateUserByid(idu: number, user: UpdateUserDto): Promise<UserEntity>;
    countUsers(): Promise<number>;
}
