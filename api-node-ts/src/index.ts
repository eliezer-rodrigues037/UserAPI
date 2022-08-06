import { json, urlencoded } from "body-parser";
import express from "express";
import { AppDataSource } from "./data-source";
import { router } from "./routes";

AppDataSource.initialize()
    .then(() => {
        // here you can start to work with your database
        console.log("Database started.");
    })
    .catch((error) => console.log(error));

const app = express();
const port = 3000;

app.use(json());
app.use(urlencoded({ extended: true }));

app.use(router);

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
