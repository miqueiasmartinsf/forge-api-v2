import { Set } from "../models/Set";
import { SetModel } from "../models/Set";

export class SetRepository {
    static async findByWorkoutId(id: string) {
        const res = await SetModel.findOne({ workoutId: id }).populate(
            "exercisesData.exercise"
        );
        console.log(res);
        return res;
    }

    static async create(setData: Set) {
        console.log(setData);
        const set = new SetModel(setData);
        console.log(set);
        const query = await set.save();
    }

    static async deleteByWorkoutId(id: string) {
        const query = await SetModel.deleteMany({ workoutId: id });
        return query;
    }

    static async updateSet(id: string, exercisesData: any) {
        const res = await SetModel.findOneAndUpdate(
            { workoutId: id },
            { $set: { "exercisesData": exercisesData } },
            { new: true }
        );
        console.log(res);
        return res;
    }
}
