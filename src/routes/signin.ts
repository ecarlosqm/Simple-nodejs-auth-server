import { Router } from "express";
import { userCreator } from "../src/users/application/user_creator";
import { UserPlainPassword } from "../src/users/domain/entities/user_plain_password";
import { UserName } from "../src/users/domain/entities/user_name";
import { UserType } from "../src/users/domain/entities/user_type";
import { UserId } from "../src/users/domain/entities/user_id";
import httpStatus from "http-status";

const signInRouter: Router = Router();

signInRouter.post(`/signin/:id`, async function (req, res) {
    try {
        console.log(req.body['username'],req.body['password']);
        await userCreator.create(new UserId(req.params['id']), new UserPlainPassword(req.body['password']), new UserName(req.body['username'],), UserType.business())
        return res.status(httpStatus.CREATED).send();
    } catch (error) {
        return res.status(httpStatus.BAD_REQUEST).send({ error: error.message });
    }
})

export { signInRouter }