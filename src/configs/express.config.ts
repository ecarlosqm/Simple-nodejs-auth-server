import express, { RequestHandler, Router, Express } from 'express'
import bodyParser from 'body-parser';
import passport from "passport";
import cookieParser from "cookie-parser";
import session from "express-session";
import { configPassport } from "./passport.config";
import { loginRouter } from '../routes/login';
import httpStatus from 'http-status';
import { User } from '../src/users/domain/entities/user';
import { signInRouter } from '../routes/signin';

export const configExpress = (expressApp: Express) => {

    // Other configurations
   
    expressApp.use(express.static("public"));
    expressApp.use(bodyParser.json());
    expressApp.use(bodyParser.urlencoded({ extended: false }));
    expressApp.use(session(
        {
            secret: 'keyboard cat',
            resave: false,
            saveUninitialized: true,
            cookie: { secure: false }
        }
    ))

    // Configure Passport
    configPassport(passport);
    expressApp.use(passport.initialize());
    expressApp.use(passport.session());

    // Configure routes
    expressApp.use(signInRouter);
    expressApp.use(loginRouter);

    expressApp.get('/',(req, res, next) => {
        if (!req.user) { 
            res.status(httpStatus.UNAUTHORIZED).send('Por favor inicia session');
            res.end();
        } else {
            res.send(`Estas dentro ${(req.user as User).name.name}`);
            res.end();
         }
    })

    expressApp.get('/logout', function (req, res) {
        req.logout();
        res.redirect('/');
    });

}

