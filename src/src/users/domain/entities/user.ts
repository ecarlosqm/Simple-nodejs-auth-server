import { UserId } from "./user_id";
import { UserName } from "./user_name";
import { UserType } from "./user_type";
import { UserPassword } from "./user_password";

export class User {
    private constructor(private _id : UserId, private _password:UserPassword, private _name:UserName, private _type:UserType){

    }

    static create(params : {id:UserId, password: UserPassword, name:UserName, type:UserType}){
        return new User(params.id, params.password, params.name,params.type);
    }

    public get id() {
        return this._id;
    }

    public get name() {
        return this._name;
    }

    public get password(){
        return this._password;
    }

    public toPrimitives(){
        return {
            id: this._id.userId,
            password: this._password,
            name: this._name.name,
            type: this._type.value
        }
    }
}