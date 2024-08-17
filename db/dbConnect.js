import mongoose from "mongoose";

export async function dbConnect() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("db connected!");
  } catch (err) {
    console.log(err?.message);
  }
}
