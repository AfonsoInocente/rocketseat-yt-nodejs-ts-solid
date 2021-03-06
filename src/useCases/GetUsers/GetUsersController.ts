import { Response } from "express";
import { GetUsersUseCase } from "./GetUsersUseCase";

export class GetUsersController {
    constructor(
        private getUsersUseCase: GetUsersUseCase
    ) {}

    async handle(response: Response) {
        try {
            const users = await this.getUsersUseCase.execute();
            return response.status(200).json({ count: Object.entries(users).length, body: users});
        } catch (error) {
            return response.status(400).json({
                message: error.message || 'Unexpected error.'
            });
        }
    }
}