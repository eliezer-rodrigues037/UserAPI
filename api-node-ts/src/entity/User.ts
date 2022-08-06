import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryColumn()
    id: string;

    @Column({ nullable: false })
    name: string;

    @Column({ unique: true })
    email: string;
}
