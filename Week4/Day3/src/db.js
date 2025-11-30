import mongoose from "mongoose";
import logger from "../utils/logger.js";

export const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/db3');
    logger.info("Database connected successfully");
  } catch (error) {
    logger.error(" Database connection failed", error);
    process.exit(1);
  }
};


export default connectDB;