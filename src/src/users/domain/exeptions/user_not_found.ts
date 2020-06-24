export class UserNotFound extends Error{
    constructor(){
        super("The user doesn't exist");
        Object.setPrototypeOf(this, new.target.prototype);
        this.name = UserNotFound.name;
    }
}