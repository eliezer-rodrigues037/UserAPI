import { Request, Response, Router } from "express";
import { StatusCodes } from "http-status-codes";
import { createUserController } from "./controllers/user/createUserController";
import { getUsersController } from "./controllers/user/getUsersController";
import { updateUserController } from "./controllers/user/updateUserController";

export const router = Router();

router.get("/", (req: Request, res: Response) => {
    return res.status(StatusCodes.OK).send("Its working! :D");
});

router.post("/users", createUserController.handle);

router.get("/users", getUsersController.handle);

router.put("/users", updateUserController.handle);
