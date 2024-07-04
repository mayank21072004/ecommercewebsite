import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

mongoose.set('debug', true);

const connectDB = async () => {
    try {
        const uri = process.env.MONGODB_URI;
        await mongoose.connect(uri, {
            // useNewUrlParser and useUnifiedTopology are no longer necessary in recent versions of Mongoose
        });
        console.log("MongoDB connected successfully");
    } catch (err) {
        console.error("MongoDB connection error: ", err.message);
        // Optionally, rethrow the error or handle it accordingly
    }
};

export default connectDB;
