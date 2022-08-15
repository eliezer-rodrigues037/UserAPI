import { Request } from "express";
import { createUserController } from "./createUserController";
import { makeMockResponse } from "../../utils/mocks/responseMock";
import { init } from "../../database";
import { AppDataSource } from "../../data-source";
import { User } from "../../entity/User";

describe("Create user controller", () => {
    const user = {
        id: "",
        name: "Test user name",
        email: "Test.user.email@test.com",
    };

    beforeAll(async () => {
        await init();
    });

    afterAll(async () => {
        const userRepo = AppDataSource.getRepository(User);
        const userToRemove = await userRepo.findOneBy({ name: user.name });
        if (userToRemove) await userRepo.remove(userToRemove);
    });

    const response = makeMockResponse();

    it("Should create a new user", async () => {
        const request = {
            body: {
                name: user.name,
                email: user.email,
            },
        } as Request;

        await createUserController.handle(request, response);

        const status = response.state.status || response.state.sendStatus;
        expect(status).toBe(201);
    });

    it("Shouldn't create a user with no name", async () => {
        const request = {
            body: {
                email: user.email,
            },
        } as Request;

        await createUserController.handle(request, response);
        const status = response.state.status || response.state.sendStatus;

        expect(status).toBe(400);
    });
});
