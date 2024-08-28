import { TimestampEntity } from "../../generic/Timestamp.entity";
export declare class UserEntity extends TimestampEntity {
    idu: number;
    firstname: string;
    lastname: string;
    Role: string;
    cin: string;
    tel: string;
    email: string;
    password: string;
    salt: string;
}
