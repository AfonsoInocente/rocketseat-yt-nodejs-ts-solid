import { ObjectId } from "mongodb";

export class User {
    public readonly _id: ObjectId;
    public name: string;
    public email: string;
    public password: string;

    constructor(props: Omit<User, '_id'>, _id?: string) {
        if (!_id) {
            this._id = new ObjectId();
        }

        Object.assign(this, props);
    }
}