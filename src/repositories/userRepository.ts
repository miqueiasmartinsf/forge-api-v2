import { User, UserModel } from "../models/User";

export class UserRepository {
    static async loadUserByEmail(email: string): Promise<User> {
        const res = await UserModel.findOne({ email: email });

        console.log(res);

        return {
            name: res?.email,
            email: res?.email,
            password: res?.password,
        };
    }
}
