import mongoose from "mongoose";

const connectMongoDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_PATH, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log(`MongoDB connected to the server`);
    } catch (error) {
        console.log(`Error connection to MongoDB: ${error.message}`);
        process.exit(1);
    }
}

export default connectMongoDB
