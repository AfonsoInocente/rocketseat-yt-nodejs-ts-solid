import { User } from "../entities/User";

export interface IUsersRepository {
    save(user: User): Promise<User>
    findAll(): Promise<{}>
    findOne(attribute: any): Promise<User | {}>
}