import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { deleteUserService } from "../../service/user/deleteUserService";
import { getUserService } from "../../service/user/getUserService";

class DeleteUserController {
    async handle(req: Request, res: Response) {
        const { id } = req.params;

        try {
            const user = await getUserService.execute(id);
            if (!user) return res.status(StatusCodes.BAD_REQUEST).json({ message: `User not found for id ${id}.` });

            await deleteUserService.execute(id);
            return res.sendStatus(StatusCodes.NO_CONTENT);
        } catch (error) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
        }
    }
}

export const deleteUserController = new DeleteUserController();
