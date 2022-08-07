import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

class GetUsersController {
    async handle(req: Request, res: Response) {
        return res.sendStatus(StatusCodes.NOT_IMPLEMENTED);
    }
}

export const getUsersController = new GetUsersController();
