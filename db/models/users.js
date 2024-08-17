import mongoose, { Schema } from "mongoose";

const schema = new Schema({
  name: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: false,
  },
  password: {
    type: String,
    required: false,
  },
  phone: {
    type: String,
    required: false,
  },
  bio: {
    type: String,
    required: false,
  },
});

export const usersModel =
  mongoose.models.users ?? mongoose.model("users", schema);
