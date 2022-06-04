import * as mongoDB from "mongodb";
import * as dotenv from "dotenv";

export const connectToDatabase = async () => {
    dotenv.config();
    const client: mongoDB.MongoClient = new mongoDB.MongoClient(process.env.DB_CONN_STRING);
    return await client.connect();
}

export const getUsersCollection = async (collection: string) => {
    const client = await connectToDatabase();

    const db: mongoDB.Db = client.db(process.env.DB_NAME);

    const newCollection: mongoDB.Collection = db.collection(collection);

    const collections: { users?: mongoDB.Collection } = {};
    collections[collection] = newCollection;

    return {
        client,
        collection: collections[collection],
    };
}

export const closeDatabaseConnection = async (client: mongoDB.MongoClient) => {
    return await client.close();
}

export const mongoObjectId = (id) => (id ? new mongoDB.ObjectId(id) : new mongoDB.ObjectId())