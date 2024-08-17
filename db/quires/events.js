import {
  replaceMongoIdInArray,
  replaceMongoIdInObject,
} from "@/utils/db-utils";
import { eventsModel } from "../models/events";
import mongoose from "mongoose";

export async function getAllEvents() {
  const response = await eventsModel.find().lean();
  return replaceMongoIdInArray(response);
}

export async function getAnEventDetails(id) {
  const response = await eventsModel.findById(id).lean();
  return replaceMongoIdInObject(response);
}
export async function updateInterest(eventId, userId) {
  const event = await eventsModel.findById(eventId);
  if (event) {
    const isExist = event.interested_ids.find((id) => id.toString() === userId);
    if (isExist) {
      event.interested_ids.pull(new mongoose.Types.ObjectId(userId));
    } else {
      event.interested_ids.push(new mongoose.Types.ObjectId(userId));
    }
    event.save();
    return true;
  }
}
