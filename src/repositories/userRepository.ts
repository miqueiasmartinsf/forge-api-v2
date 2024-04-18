import { UserModel } from "../models/User";


export class UserRepository{

    static async loadUser() {

        const data = await UserModel.exists({})
        

    }
}