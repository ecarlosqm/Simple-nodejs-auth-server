import bcrypt from "bcrypt";
import { PasswordEncyptor } from "../domain/infraestructure_interfaces/password_encrypter";
import { UserPlainPassword } from "../domain/entities/user_plain_password";
import { UserPassword } from "../domain/entities/user_password";

export class BcryptPasswordEncryptor implements PasswordEncyptor{

    private saltRounds = 10;

    constructor(){}

    async hash(plainPassword: UserPlainPassword): Promise<UserPassword> {
        const hashedPassword = await bcrypt.hash(plainPassword.plainPassword, this.saltRounds);
        return new UserPassword(hashedPassword);
    }

    async match(plainPassword: UserPlainPassword, password: UserPassword): Promise<boolean> {
        return bcrypt.compare(plainPassword.plainPassword, password.value);
    }
}

export const bcryptPasswordEncrypter = new BcryptPasswordEncryptor();