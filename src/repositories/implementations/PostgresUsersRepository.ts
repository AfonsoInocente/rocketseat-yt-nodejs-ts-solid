import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";

export class PostgresUsersRepository implements IUsersRepository {
    private users: User[] = [];

    async findByEmail(email: string): Promise<User> {
        const user = this.users.find(user => user.email === email)
        return user;
    }

    async save(user: User): Promise<User> {
        this.users.push(user);
        return this.users[this.users.length - 1];
    }

    async findAll(): Promise<User[]> {
        return this.users;
    }

    async findOne(attribute: any): Promise<User> {
        const user = this.users.find(user => user.email === attribute)
        return user;
    }
}