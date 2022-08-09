import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./entity/User";

export const AppDataSource = new DataSource({
    type: "sqlite",
    database: "./src/database/data.sqlite",
    synchronize: true,
    logging: false,
    entities: [User],
    migrations: ["./src/database/migrations/1659811163827-refactor-tables.ts"],
    subscribers: [],
});

export const TestDataSource = new DataSource({
    type: "sqlite",
    database: "./src/database/test.data.sqlite",
    synchronize: true,
    logging: false,
    entities: [User],
    migrations: ["./src/database/migrations/1659811163827-refactor-tables.ts"],
    subscribers: [],
});
