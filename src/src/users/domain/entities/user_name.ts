export class UserName{
    readonly name:string;

    constructor(name:string){
        this.name = name;
    }

    equals(userName:UserName):boolean{
        return userName.name == this.name;
    }
}