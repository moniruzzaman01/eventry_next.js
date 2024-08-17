import mongoose, { Schema } from "mongoose";

const schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  details: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  interested_ids: {
    type: Array,
    required: false,
  },
  going_ids: {
    type: Array,
    required: false,
  },
  swags: {
    type: Array,
    required: false,
  },
});

export const eventsModel =
  mongoose.models.events ?? mongoose.model("events", schema);
