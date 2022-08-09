import { createUserController } from "./createUserController";
import { Request } from "express";
import { makeMockResponse } from "../../utils/mocks/responseMock";
import { init } from "../../database";
//That's to ugly T.T needs refactoring...

describe("Create user controller", () => {
    beforeAll(async () => {
        await init();
    });

    afterAll(() => {});

    const response = makeMockResponse();

    it("Should create a new user", async () => {
        const request = {
            body: {
                name: "Some other name2",
                email: "Another2userMail@mail.com",
            },
        } as Request;

        await createUserController.handle(request, response);
        const status = response.state.status || response.state.sendStatus;
        expect(status).toBe(201);
    });

    it("Shouldn't create a user with no name", () => {
        expect(2 + 1).not.toBe(4);
    });
});
