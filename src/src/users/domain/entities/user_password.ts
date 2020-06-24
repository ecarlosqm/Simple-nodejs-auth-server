export class UserPassword {
    constructor(private _password:string){}
    get value():string{
        return this._password;
    }
}