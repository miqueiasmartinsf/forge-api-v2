import mongoose from "mongoose";
import 'dotenv/config';

export const Main = async () => {
    const url = process.env.DATABASE_URI;
    if(url){
        try{
            await mongoose.connect(url);
        }catch(error){
            console.log(error);
        }
    }
}