import { UserPlainPassword } from "../entities/user_plain_password";
import { UserPassword } from "../entities/user_password";

export interface PasswordEncyptor {
    hash(plainPassword:UserPlainPassword):Promise<UserPassword>;
    match(plainPassword:UserPlainPassword, password:UserPassword):Promise<boolean>;
}