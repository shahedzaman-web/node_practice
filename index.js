import mongoose from "mongoose";
import app from "./src/app";

const port = 5002;

//database connection
async function bootstrap() {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/local");
        console.log(`🛢 Database connection successful`);

        app.listen(port, () => {
            console.log(`Server is  listening on port ${port}`);
        });
    } catch (err) {
        console.log(`Failed to connect database`, err);
    }
}

bootstrap();