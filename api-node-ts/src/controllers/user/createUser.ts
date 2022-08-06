import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

class CreateUser {
    handle(req: Request, res: Response) {
        const { name, email } = req.body;
        return res.status(StatusCodes.CREATED).send({ message: `Usuário '${name}' with email: '${email}' created.` });
    }
}

export const createUser = new CreateUser();
