import mongoose from "mongoose";
import { DB_URI } from "./environments";
async function connectDB() {
  try {
    await mongoose.connect(DB_URI as string);

    console.log("MongoDB connected successfully");
  } catch (error) {
    console.log("MongoDB connection error :", error);
  }
}

export default connectDB;
