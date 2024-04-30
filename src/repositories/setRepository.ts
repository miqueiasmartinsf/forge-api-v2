import { Set } from "../models/Set";
import { SetModel } from "../models/Set";

export class SetRepository {
    static async findByWorkoutId(id: string) {}

    static async create(setData: Set) {
        const set = new SetModel(setData);
        const query = await set.save();
    }
}
