import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";
import * as mongoConnection from '../../services/mongoDB';

export class MongoUsersRepository implements IUsersRepository {
    private collection = 'users';

    async findOne(attributes: {}): Promise<User> {
        const {
            client,
            collection
        } = await mongoConnection.getUsersCollection(this.collection);

        const search = await collection.findOne(attributes) as User;

        await mongoConnection.closeDatabaseConnection(client);

        return search;
    }

    async save(user: User): Promise<User> {
        const {
            client,
            collection
        } = await mongoConnection.getUsersCollection(this.collection);

        const result = await collection.insertOne(user);

        const registeredUser = await collection.findOne({
            _id: mongoConnection.mongoObjectId(result.insertedId)
        });

        await mongoConnection.closeDatabaseConnection(client);

        return registeredUser as User;
    }

    async findAll(limit = 20, offset = 0): Promise<{}> {
        const {
            client,
            collection
        } = await mongoConnection.getUsersCollection(this.collection);

        const count = await collection.count();
        const rows = await collection.find({}, { projection: { _id: 0 } })
            .limit(limit)
            .skip(offset)
            .toArray();

        await mongoConnection.closeDatabaseConnection(client);

        return { count, rows };
    }
}