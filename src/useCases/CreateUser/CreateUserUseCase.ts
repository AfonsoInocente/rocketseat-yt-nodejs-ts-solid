import { User } from "../../entities/User";
import { IMailProvider } from "../../providers/IMailProvider";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { ICreateUserRequestDTO } from "./CreateUserDTO";

import dotenv from 'dotenv';
dotenv.config();

export class CreateUserUseCase {
    constructor(
        private usersRepository: IUsersRepository,
        private mailProvider: IMailProvider
    ) {}

    async execute(data: ICreateUserRequestDTO) {
        const findUser = await this.usersRepository.findOne({ email: data.email });

        if (findUser) {
            throw new Error('User already exists.');
        }

        const user = new User(data);

        const newUser = await this.usersRepository.save(user);

        await this.mailProvider.sendMail({
            to: {
                name: data.name,
                email: data.email
            },
            from: {
                name: process.env.TEAM_NAME,
                email: process.env.TEAM_EMAIL
            },
            subject: 'Seja bem-vindo ao app',
            body: '<p>Você já pode fazer login em nossa plataforma.</p>'
        })

        return newUser;

        return {} as User;
    }
}