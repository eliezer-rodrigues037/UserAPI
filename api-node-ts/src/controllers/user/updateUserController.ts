import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { updateUserService } from "../../service/user/updateUserService";

class UpdateUserController {
    async handle(req: Request, res: Response) {
        const { id } = req.params;
        const { name, email } = req.body;

        if (!id) return res.status(StatusCodes.BAD_REQUEST).json({ message: "Id não informado." });
        if (!name || name.length === 0) return res.status(StatusCodes.BAD_REQUEST).json({ message: "Nome não informado." });

        try {
            const dbResponse = await updateUserService.execute({
                id: id,
                name: name,
                email: email,
            });

            return res.status(StatusCodes.OK).json(dbResponse);
        } catch (error) {
            return res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR);
        }
    }
}

export const updateUserController = new UpdateUserController();
