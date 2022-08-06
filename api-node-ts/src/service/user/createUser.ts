export interface IUser {
    name: string;
    email: string;
}

const data = [];

class CreateUserService {
    execute({ name, email }: IUser) {
        data.push({ name, email });

        return data;
    }
}

export const createUserService = new CreateUserService();
