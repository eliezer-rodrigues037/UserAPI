import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { createUserService, IUser } from "../../service/user/createUserService";

class CreateUser {
    handle(req: Request, res: Response) {
        const { name, email } = req.body;

        if (!name || !email) return res.status(StatusCodes.BAD_REQUEST).send({ message: "Nome ou email não informado T.T" });
        if (name.length === 0) return res.status(StatusCodes.BAD_REQUEST).send({ message: "Nome não informado T.T" });
        if (email.length === 0) return res.status(StatusCodes.BAD_REQUEST).send({ message: "email não informado T.T" });

        const user = <IUser[]>createUserService.execute({ name, email });

        return res.status(StatusCodes.CREATED).json(user);
    }
}

export const createUserController = new CreateUser();
