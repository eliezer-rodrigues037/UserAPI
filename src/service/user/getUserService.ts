import { AppDataSource } from "../../data-source";
import { User } from "../../entity/User";

class GetUserService {
    async execute(id: string) {
        const userRepo = AppDataSource.getRepository(User);
        try {
            const user = await userRepo.findOneBy({ id: id });
            return user;
        } catch (error) {
            return error;
        }
    }
}

export const getUserService = new GetUserService();
