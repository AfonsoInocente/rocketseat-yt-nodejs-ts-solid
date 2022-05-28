import Database from "../../config/database";
import { GetUsersUseCase } from "./GetUsersUseCase";
import { GetUsersController } from "./GetUsersController";

const databaseRepository = new Database();

const getUsersUseCase = new GetUsersUseCase(databaseRepository);

const getUsersController = new GetUsersController(getUsersUseCase);

export { getUsersController };