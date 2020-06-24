import { VerifyFunction, Strategy as LocalStrategy } from "passport-local"
import passport from "passport"
import { userFinder } from "../src/users/application/user_finder";
import { UserName } from "../src/users/domain/entities/user_name";
import { User } from "../src/users/domain/entities/user";
import { UserNotFound } from "../src/users/domain/exeptions/user_not_found";
import { UserId } from "../src/users/domain/entities/user_id";
import { userAuthenticator } from "../src/users/application/user_authenticator";
import { UserPlainPassword } from "../src/users/domain/entities/user_plain_password";
import { PasswordDoesNotMatch } from "../src/users/domain/exeptions/password_does_not_match";

export const configPassport = (passport: passport.PassportStatic) => {

    const verifyFunction: VerifyFunction = async (username, password, done) => {
        try {
            const user: User = await userAuthenticator.autenticate(new UserName(username), new UserPlainPassword(password));
            return done(null, user);
        } catch (error) {
            if (error instanceof UserNotFound) {
                return done(null, false, { message: error.message });
            } else if (error instanceof PasswordDoesNotMatch) {
                return done(null, false, { message: error.message });
            } else {
                return done('It was not possible complete the operation, Try again in a moment')
            }
        }
    }

    const expressLocalStrategy: LocalStrategy = new LocalStrategy(verifyFunction)

    passport.use(expressLocalStrategy)

    passport.serializeUser((user: User, done) => {
        done(null, user.id.userId);
    });

    passport.deserializeUser(async (id: string, done) => {
        try {
            const user: User = await userFinder.findById(new UserId(id))
            return done(null, user);
        } catch (error) {
            done(error);
        }
    });

}