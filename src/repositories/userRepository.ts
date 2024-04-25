import { User, UserModel } from "../models/User";
import mongoose from "mongoose";

export class UserRepository {
    static async findByUserByEmail(email: string): Promise<User> {
        const res = await UserModel.findOne({ email: email });

        return {
            _id: res?._id,
            name: res?.email,
            email: res?.email,
            password: res?.password,
        };
    }

    static async findByUserId(id: string) {
        const res = await UserModel.findById(id);
        return {
            _id: res?._id,
            name: res?.email,
            email: res?.email,
            profilePic: res?.profilePic,
            createdAt: res?.createdAt,
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
