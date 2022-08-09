import { AppDataSource } from "../../data-source";
import { User } from "../../entity/User";

class DeleteUserService {
    async execute(id: string) {
        const repo = AppDataSource.getRepository(User);
        const userToRemove = await repo.findOneBy({ id: id });

        const dbResponse = await repo.remove(userToRemove);

        return dbResponse;
    }
}

export const deleteUserService = new DeleteUserService();
