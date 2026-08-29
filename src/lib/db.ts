import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI as string;

let cached = (global as any).mongoose || { conn: null, promise: null };

if (!(global as any).mongoose) {
    (global as any).mongoose = cached;
}

export async function connectDB() {
    if (cached.conn) return cached.conn;

    if (!MONGODB_URI) {
        console.warn("MONGODB_URI is not defined in environment variables. Database operations will be skipped.");
        return null;
    }

    if (!cached.promise) {
        const opts = {
            bufferCommands: false,
        };
        cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongooseInstance) => {
            return mongooseInstance;
        }).catch((err) => {
            cached.promise = null;
            throw err;
        });
    }

    try {
        cached.conn = await cached.promise;
    } catch (e) {
        cached.promise = null;
        console.error("MongoDB Connection Error:", e);
        return null;
    }

    return cached.conn;
}

export default connectDB;
