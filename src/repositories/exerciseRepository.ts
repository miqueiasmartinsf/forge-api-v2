import { Exercise, ExerciseModel, exerciseSchema } from "../models/Exercise";

export class ExerciseRepository {
    static async findAll() {
        const res = await ExerciseModel.find({});
        return res;
    }

    static async findById(id: string) {
        const res = await ExerciseModel.findById(id);
        return res;
    }

    static async findByMuscularGroupId(id: string) {
        const res = await ExerciseModel.find({ muscularGroupId: id });
        return res;
    }

    static async findByQuerySearch(query: string) {
        const res = await ExerciseModel.find({
            $or: [{ name: { $regex: query } }],
        });
        return res;
    }

    static async create(exerciseData: Exercise) {
        const exercise = new ExerciseModel(exerciseData);
        const query = await exercise.save();
        return query;
    }
}
