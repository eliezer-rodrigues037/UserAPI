import { AppDataSource } from "../data-source";

export const init = async () => {
    await AppDataSource.initialize()
        .then(() => {
            console.log("Database connection started.");
        })
        .catch((error) => console.log(error));
};
