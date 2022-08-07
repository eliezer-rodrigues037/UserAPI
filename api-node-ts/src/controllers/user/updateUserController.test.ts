import { updateUserService } from "../../service/user/updateUserService";
import { getUsersService } from "../../service/user/getUsersService";
import { updateUserController } from "./updateUserController";
import { MakeMockRequest } from "../../utils/mocks/resquestMock";
import { init } from "../../database";
import { makeMockResponse } from "../../utils/mocks/responseMock";
import { Request } from "express";
describe("Update user controller", () => {
    beforeAll(async () => {
        await init();
    });

    it("Should update a user.", async () => {
        const users = await getUsersService.execute();
        const user = users[0];
        user.name = "Sasa fernandes";

        const request = {
            body: {
                id: user.id,
                name: user.name,
                email: user.email,
            },
        } as Request;

        const response = makeMockResponse();

        await updateUserController.handle(request, response);
        const status = response.state.status || response.state.sendStatus;

        expect(status).toBe(200);
    });
});
