import { json, urlencoded } from "body-parser";
import express, { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

const app = express();
const port = 3000;

app.use(json());
app.use(urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
    return res.status(StatusCodes.OK).send("Hello!");
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
