import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { createUserService } from "../../service/user/createUserService";

class CreateUser {
    async handle(req: Request, res: Response) {
        const { name, email } = req.body;

        if (!name || !email) return res.status(StatusCodes.BAD_REQUEST).json({ message: "Nome ou email não informado T.T" });
        if (name.length === 0) return res.status(StatusCodes.BAD_REQUEST).json({ message: "Nome não informado T.T" });
        if (email.length === 0) return res.status(StatusCodes.BAD_REQUEST).json({ message: "email não informado T.T" });

        try {
            const user = await createUserService.execute({ name, email });
            return res.status(StatusCodes.CREATED).json(user);
        } catch (error) {
            return res.sendStatus(StatusCodes.BAD_REQUEST);
        }
    }
}

export const createUserController = new CreateUser();
