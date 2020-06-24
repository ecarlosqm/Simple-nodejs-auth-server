export class PasswordDoesNotMatch extends Error{
    constructor(){
        super("The password doesn't match");
        Object.setPrototypeOf(this, new.target.prototype);
        this.name = PasswordDoesNotMatch.name;
    }
}