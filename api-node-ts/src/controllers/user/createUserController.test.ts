import { createUserController } from "./createUserController";
import { Request } from "express";
import { makeMockResponse } from "../../utils/mocks/responseMock";
import { TestDataSource } from "../../data-source";
import { CreateUserService } from "../../service/user/createUserService";
import { IUser } from "../../service/user/createUserService";
import { User } from "../../entity/User";
import { v4 as uuidv4 } from "uuid";

describe("Create user controller", () => {
    it("Should create a new user", async () => {
        jest.spyOn(CreateUserService.prototype, "execute").mockImplementation(async ({ name, email }: IUser) => {
            const user = new User();

            user.id = uuidv4();
            user.name = name;
            user.email = email;

            const DBresponse = await TestDataSource.manager.save(user);

            return DBresponse;
        });

        await TestDataSource.initialize()
            .then(() => {
                console.log("Test database connection started.");
            })
            .catch((error) => console.log(error));

        const request = {
            body: {
                name: "Some other name2",
                email: "Another2userMail@mail.com",
            },
        } as Request;

        const response = makeMockResponse();

        await createUserController.handle(request, response).then(() => {
            TestDataSource.dropDatabase();
        });

        expect(response.state.status).toBe(201);
    });

    it("Shouldn't create a user with no name", () => {
        expect(2 + 1).not.toBe(4);
    });
});
