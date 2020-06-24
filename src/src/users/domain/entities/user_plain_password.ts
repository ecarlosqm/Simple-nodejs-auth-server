export class UserPlainPassword {
    constructor(private _plainPassword:string){}

    public get plainPassword(){
        return this._plainPassword;
    }
}