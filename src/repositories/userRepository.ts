import { User, UserModel } from "../models/User";

export class UserRepository {
    static async loadUserByEmail(email: string): Promise<User> {
        const res = await UserModel.findOne({ email: email });

        return {
            id: res?.id,
            name: res?.email,
            email: res?.email,
            password: res?.password,
        };
    }

    static async userExists(email: string): Promise<boolean> {
        const res = await UserModel.exists({ email: email });
        if (res) {
            return true;
        } else {
            return false;
        }
    }
}
