import { Workout, WorkoutModel } from "../models/Workout";
import { ObjectId } from "mongodb";

export class WorkoutRepository {
    static async findByUserId(id: ObjectId) {
        const res = await WorkoutModel.findOne({ userId: id });
        return res;
    }

    static async create(workoutData: Workout) {
        const workout = new WorkoutModel(workoutData);
        const query = await workout.save();
        return query;
    }
}
