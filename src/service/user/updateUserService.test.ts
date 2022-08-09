import { updateUserService } from "./updateUserService";
import { getUsersService } from "./getUsersService";
import { init } from "../../database";
import { randomInt } from "crypto";

describe("Update user service", () => {
    beforeAll(async () => {
        await init();
    });

    it("Should update user", async () => {
        const users = await getUsersService.execute();
        const user = users[0];
        user.name = "Sabrina Fernandes" + randomInt(100);

        const result = await updateUserService.execute({
            id: user.id,
            name: user.name,
        });

        expect(result).toMatchObject(user);
    });
});
