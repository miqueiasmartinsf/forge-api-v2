import { Workout, WorkoutModel } from "../models/Workout";
import { ObjectId } from "mongodb";

export class WorkoutRepository {
    static async findByUserId(id: ObjectId) {
        const res = await WorkoutModel.find({ userId: id });
        return res;
    }

    static async findByWorkoutId(id: string) {
        const res = await WorkoutModel.findById(id);
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
        }
    }

    static async deleteById(id:string){
        const query = await WorkoutModel.findByIdAndDelete(id);
        return query;
    }
}
