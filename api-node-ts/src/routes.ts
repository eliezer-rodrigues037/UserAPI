import { Request, Response, Router } from "express";
import { StatusCodes } from "http-status-codes";
import { createUser } from "./controllers/user/createUser";

export const router = Router();

router.get("/", (req: Request, res: Response) => {
    return res.status(StatusCodes.OK).send("Its working! :D");
});

router.post("/users", createUser.handle);
