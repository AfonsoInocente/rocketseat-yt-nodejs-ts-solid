import { PostgresUsersRepository } from "../../repositories/implementations/PostgresUsersRespository";
import { GetUsersUseCase } from "./GetUsersUseCase";
import { GetUsersController } from "./GetUsersController";

const postgresUsersResponsitory = new PostgresUsersRepository();

const getUsersUseCase = new GetUsersUseCase(postgresUsersResponsitory);

const getUsersController = new GetUsersController(getUsersUseCase);

export { getUsersController };