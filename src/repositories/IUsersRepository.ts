import { User } from "../entities/User";

export interface IUsersRepository {
    findByEmail(email: string): Promise<User | undefined>;
    save(user: User): Promise<User>
    findAll(): Promise<User[] | undefined>
    findOne(attribute: any): Promise<User | undefined>
}