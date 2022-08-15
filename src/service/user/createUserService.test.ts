import { AppDataSource } from "../../data-source";
import { init } from "../../database";
import { User } from "../../entity/User";
import { createUserService } from "./createUserService";

describe("Create user test.", () => {
    beforeAll(async () => {
        await init();
    });

    const user = {
        id: "",
        name: "Test user name",
        email: "Test.user.mail@test.com",
    };

    beforeAll(async () => {
        const userRepo = AppDataSource.getRepository(User);
        const userToRemove = await userRepo.findOneBy({ name: user.name });
        if (userToRemove) await userRepo.remove(userToRemove);
    });

    it("Should create a new user", async () => {
        const result = await createUserService.execute(user);
        user.id = result.id;

        expect(result).toMatchObject(user);
    });
});
