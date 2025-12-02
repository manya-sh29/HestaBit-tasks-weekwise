import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/db4");
    console.log("✔ Database connected");
  } catch (err) {
    console.error(" DB Connection Error:", err);
    throw err;
  }
};

export default connectDB;
