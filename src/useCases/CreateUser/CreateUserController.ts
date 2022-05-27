import { Request, Response } from 'express';
import { CreateUserUseCase } from './CreateUserUseCase';

export class CreateUserController {
    constructor(
        private createUserUseCase: CreateUserUseCase,
    ) {}

    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const { name, email, password } = request.body;

            await this.createUserUseCase.execute({
                name,
                email,
                password
            });

            return response.status(201).send({ message: 'Usuário criado com sucesso.' });
        } catch (error) {
            return response.status(400).json({
                message: error.message || 'Unexpected error.'
            });
        }
    }
}