import { Set } from "../models/Set";
import { SetModel } from "../models/Set";

export class SetRepository {
    static async findByWorkoutId(id: string) {
        const res = await SetModel.findOne({ workoutId: id });
        return res;
    }

    static async create(setData: Set) {
        const set = new SetModel(setData);
        const query = await set.save();
    }
}
