import { User, UserModel } from "../models/User";

export class authRepository {
    static async loginUser(userData: User) {}

    static async createUser(userData: User) {
        const user = new UserModel(userData);
        const query = await user.save();
        return query;
    }
}
