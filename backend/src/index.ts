import mongoose from "mongoose";
import { app } from "./app";

const port: string | undefined = process.env.PORT;

const startServer = async () => {
    try {
        mongoose.set('strictQuery', true);
        await mongoose.connect(process.env.MONGODB_URL!)
        console.log('Connected to db')
        app.listen(port, () => console.log(`server running on ${port}`))
    } catch (error) {
        console.log("Failed to connect to the dv")
        console.error()
    }
}

startServer()