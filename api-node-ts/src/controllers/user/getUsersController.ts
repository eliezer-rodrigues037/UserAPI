import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { getUsersService } from "../../service/user/getUsersService";

class GetUsersController {
    async handle(req: Request, res: Response) {
        try {
            const users = await getUsersService.execute();
            return res.status(StatusCodes.OK).json(users);
        } catch (error) {
            return res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR);
        }
    }
}

export const getUsersController = new GetUsersController();
