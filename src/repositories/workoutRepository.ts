import { Workout, WorkoutModel } from "../models/Workout";
import { ObjectId } from "mongodb";

export class WorkoutRepository {
    static async findByUserId(id: ObjectId) {
        const res = await WorkoutModel.findOne({ userId: id });
        return res;
    }

    static async create(workoutData: Workout) {
        try {
            const workout = new WorkoutModel(workoutData);
            console.log(workout);
            const query = await workout.save();
            console.log(query);
            return query;
        } catch (error) {
            console.log(error);
        }
    }
}
