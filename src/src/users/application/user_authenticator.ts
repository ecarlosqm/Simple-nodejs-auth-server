import { User } from "../domain/entities/user";
import { UserName } from "../domain/entities/user_name";
import { UserPlainPassword } from "../domain/entities/user_plain_password";
import { UserFinder, userFinder } from "./user_finder";
import { PasswordDoesNotMatch } from "../domain/exeptions/password_does_not_match";
import { bcryptPasswordEncrypter } from "../infraestructure/bcrypt_password_encryptor";
import { PasswordEncyptor } from "../domain/infraestructure_interfaces/password_encrypter";

export class UserAuthenticator {
    constructor(private userFinder:UserFinder, private passwordMatcher:PasswordEncyptor){}

    public async autenticate(username:UserName, password:UserPlainPassword):Promise<User>{
        const user:User = await this.userFinder.findByName(username);
        if(!await this.passwordMatcher.match(password, user.password)){
            throw new PasswordDoesNotMatch(); 
        }
        return user;
    }
}

export const userAuthenticator = new UserAuthenticator(userFinder, bcryptPasswordEncrypter)