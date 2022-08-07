import { User } from "../../entity/User";
import { v4 as uuidv4 } from "uuid";
import { AppDataSource } from "../../data-source";

export interface IUser {
    name: string;
    email: string;
}

export class CreateUserService {
    async execute({ name, email }: IUser) {
        const user = new User();

        user.id = uuidv4();
        user.name = name;
        user.email = email;

        const DBresponse = await AppDataSource.manager.save(user);

        return DBresponse;
    }
}

export const createUserService = new CreateUserService();
