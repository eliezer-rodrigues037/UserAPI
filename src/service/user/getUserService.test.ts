import { init } from "../../database/index";
import { createUserService } from "./createUserService";
import { deleteUserService } from "./deleteUserService";
import { getUserService } from "./getUserService";
import { randomInt } from "crypto";
import { v4 as uuidv4 } from "uuid";

describe("Get user service", () => {
    const user = {
        id: "",
        name: "New user name",
        email: randomInt(1000) + ".user.email@mail.com",
    };

    beforeAll(async () => {
        await init();
        let { id } = await createUserService.execute({
            name: user.name,
            email: user.email,
        });
        user.id = id;
    });

    test("Should return a user by id", async () => {
        const result = await getUserService.execute(user.id);
        expect(result).toMatchObject(user);
    });

    test("Should return null on non existing id", async () => {
        const result = await getUserService.execute(uuidv4());

        expect(result).toBe(null);
    });

    afterAll(async () => {
        await deleteUserService.execute(user.id);
    });
});
