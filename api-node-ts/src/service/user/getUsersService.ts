import { AppDataSource } from "../../data-source";
import { User } from "../../entity/User";

class GetUsersServices {
    async execute() {
        const users = await AppDataSource.getRepository(User).find();

        return users;
    }
}

export const getUsersService = new GetUsersServices();
