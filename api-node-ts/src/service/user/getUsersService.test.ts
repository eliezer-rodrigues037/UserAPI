import { AppDataSource } from "../../data-source";
import { getUsersService } from "./getUsersService";

describe("getUsersServices", () => {
    beforeAll(async () => {
        await AppDataSource.initialize()
            .then(() => {
                console.log("Database connection started.");
            })
            .catch((error) => console.log(error));
    });

    it("Should return a list of users", async () => {
        const users = await getUsersService.execute();

        expect(users.length).not.toBe(0);
        expect(users).toBeInstanceOf(Array);
    });
});
