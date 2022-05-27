import { MailtrapMailProvider } from "../../providers/implementations/MailtrapMailProvider";
import { PostgresUsersRepository } from "../../repositories/implementations/PostgresUsersRespository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const mailtrapMailProvider = new MailtrapMailProvider();
const postgresUsersResponsitory = new PostgresUsersRepository();

const createUserUseCase = new CreateUserUseCase(
    postgresUsersResponsitory,
    mailtrapMailProvider
);

const createUserController = new CreateUserController(createUserUseCase);

export { createUserController }