import { randomInt } from "crypto";
import { init } from "../../database";
import { createUserService } from "../../service/user/createUserService";
import { deleteUserService } from "../../service/user/deleteUserService";
import { makeMockResponse } from "../../utils/mocks/responseMock";
import { MakeMockRequest } from "../../utils/mocks/resquestMock";
import { getUserController } from "./getUserController";

describe("Get user controller", () => {
    const user = {
        id: "",
        name: "Felipe rodriges",
        email: "Felipe." + randomInt(10) + "Rodrigues@mail.com",
    };

    beforeAll(async () => {
        await init();
        const { id } = await createUserService.execute({
            name: user.name,
            email: user.email,
        });
        user.id = id;
    });

    afterAll(async () => {
        await deleteUserService.execute(user.id);
    });

    it("Should return a user by id", async () => {
        const request = MakeMockRequest({
            params: {
                id: user.id,
            },
        });

        const response = makeMockResponse();

        await getUserController.execute(request, response);

        const status = response.state.status || response.state.sendStatus;

        expect(status).toBe(200);

        expect(response.state.json).toMatchObject(user);
    });
});
