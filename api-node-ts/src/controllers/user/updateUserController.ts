import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { updateUserService } from "../../service/user/updateUserService";

class UpdateUserController {
    async handle(req: Request, res: Response) {
        const { id, name, email } = req.body;
        try {
            const dbResponse = await updateUserService.execute({
                id: id,
                name: name,
                email: email,
            });

            return res.sendStatus(StatusCodes.OK);
        } catch (error) {
            return res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR);
        }
    }
}

export const updateUserController = new UpdateUserController();
