export class UserType {
    readonly value:string;

    private constructor(type:string){
        this.value = type;
    }
    
    static client(){
        return new UserType('client');
    }
    
    static business(){
        return new UserType('business');
    }

}