import { User } from "../entities/user";
import { UserId } from "../entities/user_id";
import { UserName } from "../entities/user_name";

export interface UserRepository {
    createUser(user:User):Promise<void>;
    findUserById(id:UserId): Promise<User|null> ;
    findUserByName(name:UserName): Promise<User|null> ;
}