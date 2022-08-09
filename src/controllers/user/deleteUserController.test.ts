import { deleteUserController } from "./deleteUserController";
import { createUserService } from "../../service/user/createUserService";
import { init } from "../../database";
import { v4 as uuidv4 } from "uuid";
import { randomInt } from "crypto";
import { MakeMockRequest } from "../../utils/mocks/resquestMock";
import { makeMockResponse } from "../../utils/mocks/responseMock";
import { AppDataSource } from "../../data-source";
import { User } from "../../entity/User";

describe("Delete user controller", () => {
    beforeAll(async () => {
        await init();
    });

    const user = {
        id: uuidv4(),
        name: "new user name",
        email: "userMail" + randomInt(1000) + "@mail.com",
    };

    afterAll(async () => {
        //Case delete service fails
        const repo = AppDataSource.getRepository(User);
        const userToRemove = await repo.findOneBy({ id: user.id });
        if (userToRemove) {
            await repo.remove(userToRemove);
        }
    });

    it("Should delete a user", async () => {
        const createdUser = await createUserService.execute(user);

        const request = MakeMockRequest({
            params: {
                id: createdUser.id,
            },
        });

        const response = makeMockResponse();

        await deleteUserController.handle(request, response);
        const status = response.state.status || response.state.sendStatus;

        expect(status).toBe(204);
    });
});
