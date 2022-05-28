import Database from "../../config/database";
import MailProvider from "../../config/mailprovider";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const mailProvider = new MailProvider();
const databaseRepository = new Database();

const createUserUseCase = new CreateUserUseCase(
    databaseRepository,
    mailProvider
);

const createUserController = new CreateUserController(createUserUseCase);

export { createUserController }