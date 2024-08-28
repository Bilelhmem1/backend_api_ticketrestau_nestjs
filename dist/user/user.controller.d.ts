import { UserSubscribeDto } from "./Dto/user-subscribe.Dto";
import { UserEntity } from "./entities/user.entity";
import { UserService } from "./user.service";
import { loginCredentialsDto } from "./Dto/login-Credentials.Dto";
import { UpdateUserDto } from './Dto/update-user.dto';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    Register(userData: UserSubscribeDto): Promise<UserEntity>;
    login(credentials: loginCredentialsDto): Promise<{
        access_token: string;
    }>;
    softdelete(id: number): Promise<import("typeorm").UpdateResult>;
    restoruser(id: number): Promise<void>;
    getList(): Promise<UserEntity[]>;
    updateuser(id: number, user: UpdateUserDto): Promise<UserEntity>;
    nbUser(): Promise<number>;
}
