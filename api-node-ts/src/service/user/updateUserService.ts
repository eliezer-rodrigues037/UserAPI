import { AppDataSource } from "../../data-source";
import { User } from "../../entity/User";

export interface IUser {
    id: string;
    name: string;
    email?: string;
}

class UpdateUserService {
    async execute({ id, name, email }: IUser) {
        const userRepo = AppDataSource.getRepository(User);
        const userToUpdate = await userRepo.findOneBy({ id: id });

        userToUpdate.name = name;
        if (email) userToUpdate.email;

        const dbResponse = await userRepo.save(userToUpdate);

        return dbResponse;
    }
}

export const updateUserService = new UpdateUserService();
