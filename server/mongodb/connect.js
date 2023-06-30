import mongoose from "mongoose";

const connectDB = async (url) => {
  mongoose.set("strictQuery", true);

  await mongoose.connect(url);
  console.log("MongoDB Connected Successfully!");
};

export default connectDB;
