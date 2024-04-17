import { User, UserModel } from "../models/User";

export class authRepository{

    static async loginUser(){}

    static async createUser(userData : User){

        const user = new UserModel(userData);


        
    }

}