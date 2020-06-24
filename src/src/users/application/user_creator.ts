import { UserId } from "../domain/entities/user_id";
import { UserName } from "../domain/entities/user_name";
import { UserType } from "../domain/entities/user_type";
import { UserRepository } from "../domain/infraestructure_interfaces/user_repository";
import { inMemoryUserRepository } from "../infraestructure/in_memory_user_repository";
import { User } from "../domain/entities/user";
import { UserPassword } from "../domain/entities/user_password";
import { bcryptPasswordEncrypter } from "../infraestructure/bcrypt_password_encryptor";
import { PasswordEncyptor } from "../domain/infraestructure_interfaces/password_encrypter";
import { UserPlainPassword } from "../domain/entities/user_plain_password";

export class UserCreator {

    constructor(private repository:UserRepository, private passwordEncyptor:PasswordEncyptor){

    }

    public async create(id:UserId, plainPassword:UserPlainPassword, name:UserName, type:UserType):Promise<void>{

        const password:UserPassword = await this.passwordEncyptor.hash(plainPassword);

        return this.repository.createUser(User.create({id:id,password:password,name:name,type:type}));
    }

}

export const userCreator = new UserCreator(inMemoryUserRepository, bcryptPasswordEncrypter)