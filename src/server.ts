import { app } from "./app";
import { Main } from "./db";
import mongoose from "mongoose";

const PORT = process.env.PORT || 3000;

Main();

mongoose.connection.once("open", () => {
    app.listen(PORT, () => {
        console.log(`Server running on port: ${PORT}`);
    });
});

mongoose.connection.on('connected', () => console.log('connected'));
mongoose.connection.on('open', () => console.log('open'));
mongoose.connection.on('disconnected', () => console.log('disconnected'));
mongoose.connection.on('reconnected', () => console.log('reconnected'));
mongoose.connection.on('disconnecting', () => console.log('disconnecting'));
mongoose.connection.on('close', () => console.log('close'));

mongoose.connection.on("error", (err) => {
    console.log(err);
});
