import { inMemoryUserRepository } from "../infraestructure/in_memory_user_repository";
import { UserRepository } from "../domain/infraestructure_interfaces/user_repository";
import { UserCreator } from "./user_creator";
import { UserId } from "../domain/entities/user_id";
import { User } from "../domain/entities/user";
import { UserName } from "../domain/entities/user_name";
import { UserNotFound } from "../domain/exeptions/user_not_found";

export class UserFinder {
    constructor(public repository:UserRepository){}

    public async findByName(name:UserName):Promise<User>{
        const user:User|null = await this.repository.findUserByName(name);
        if(user === null ){
            throw new UserNotFound();
        }
        return user;
    }

    public async findById(id:UserId):Promise<User>{
        const user:User|null = await this.repository.findUserById(id);
        if(user === null ){
            throw new UserNotFound();
        }
        return user;
    }
}

export const userFinder = new UserFinder(inMemoryUserRepository);