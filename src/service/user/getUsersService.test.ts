import { AppDataSource } from "../../data-source";
import { getUsersService } from "./getUsersService";
import { init } from "../../database/";

describe("getUsersServices", () => {
    beforeAll(async () => {
        await init();
    });

    it("Should return a list of users", async () => {
        const users = await getUsersService.execute();

        expect(users.length).not.toBe(0);
        expect(users).toBeInstanceOf(Array);
    });
});
