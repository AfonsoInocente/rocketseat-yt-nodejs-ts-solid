import { IUsersRepository } from "../../repositories/IUsersRepository";

export class GetUsersUseCase {
    constructor(
        private usersRepository: IUsersRepository
    ){}

    async execute() {
        return this.usersRepository.findAll();
    }
}