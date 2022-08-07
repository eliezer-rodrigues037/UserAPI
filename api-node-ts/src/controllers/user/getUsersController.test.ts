import { AppDataSource } from "../../data-source";
import { init } from "../../database";
import { makeMockResponse } from "../../utils/mocks/responseMock";
import { MakeMockRequest } from "../../utils/mocks/resquestMock";
import { getUsersController } from "./getUsersController";

describe("Get users controlelr", () => {
    beforeAll(async () => {
        await init();
    });

    it("Should return all users", async () => {
        const request = MakeMockRequest({});
        const response = makeMockResponse();

        const users = await getUsersController.handle(request, response);
        const status = response.state.status || response.state.sendStatus;

        expect(status).toBe(200);
        expect(users).toBeInstanceOf(Array);
    });
});
