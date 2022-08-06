import { json, urlencoded } from "body-parser";
import express from "express";
import { router } from "./routes";

const app = express();
const port = 3000;

app.use(json());
app.use(urlencoded({ extended: true }));

app.use(router);

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
