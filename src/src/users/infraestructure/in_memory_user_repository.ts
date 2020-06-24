import { UserRepository } from "../domain/infraestructure_interfaces/user_repository";
import { UserId } from "../domain/entities/user_id";
import { User } from "../domain/entities/user";
import { UserName } from "../domain/entities/user_name";

class InMemoryUserRepository implements UserRepository {

    private users: Map<string, User>;

    constructor() {
        this.users = new Map();
    }

    async findUserById(id: UserId): Promise<User | null> {
        const result:User|undefined = this.users.get(id.userId);
        if(result === undefined){
            return null;
        }
        return result;
    }

    async findUserByName(name: UserName): Promise<User | null> {
        const result:User|undefined = Array.from(this.users.values()).find((user,index,users)=>{
            return user.name.equals(name);
        })

        if(result === undefined){
            return null;
        }
        return result;
    }

    async createUser(user: User): Promise<void> {
        this.users.set(user.id.userId, user);
        console.log(this.users);
    }
}

export const inMemoryUserRepository = new InMemoryUserRepository();