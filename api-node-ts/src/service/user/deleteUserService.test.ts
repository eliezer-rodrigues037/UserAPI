import { deleteUserService } from "./deleteUserService";
import { createUserService } from "./createUserService";
import { init } from "../../database";
import { v4 as uuidv4 } from "uuid";
import { randomInt } from "crypto";

describe("Delete user controller", () => {
    beforeAll(async () => {
        await init();
    });

    const user = {
        id: uuidv4(),
        name: "New user Name",
        email: "usereMail" + randomInt(1000) + "@mail.com",
    };

    it("Should delete a user", async () => {
        const createdUser = await createUserService.execute(user);
        const result = await deleteUserService.execute(createdUser.id);

        expect(result.name).toBe(user.name);
    });
});
