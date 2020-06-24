import { Router } from "express";
import passport from "passport";

const loginRouter: Router = Router();

loginRouter.post('/login', passport.authenticate('local', {
    successRedirect: '/',
}));

export { loginRouter }