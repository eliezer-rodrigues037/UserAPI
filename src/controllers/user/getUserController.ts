import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { getUserService } from "../../service/user/getUserService";

class GetUserController {
    async handle(req: Request, res: Response) {
        try {
            const { id } = req.params;
            if (!id) return res.status(StatusCodes.BAD_REQUEST).json({ message: "No id provided." });
            const user = await getUserService.execute(id);
            if (!user) return res.status(StatusCodes.BAD_REQUEST).json({ message: `No user found for id "${id}".` });
            return res.status(StatusCodes.OK).json(user);
        } catch (error) {
            console.dir(error);
            return res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR);
        }
    }
}

export const getUserController = new GetUserController();
