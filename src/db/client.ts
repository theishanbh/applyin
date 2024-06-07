import { error } from "console";
import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI as string, {
      // useNewUrlParser: true,
      dbName: "user",
    });
    console.log("MongoDB connected");
  } catch (err) {
    console.log(err);
  }
};
