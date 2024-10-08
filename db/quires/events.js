import {
  replaceMongoIdInArray,
  replaceMongoIdInObject,
} from "@/utils/db-utils";
import { eventsModel } from "../models/events";
import mongoose from "mongoose";
import { dbConnect } from "../dbConnect";

export async function getAllEvents(query) {
  await dbConnect();
  let response;
  if (query) {
    const regex = new RegExp(query, "i");
    response = await eventsModel.find({ name: { $regex: regex } }).lean();
  } else {
    response = await eventsModel.find().lean();
  }
  return replaceMongoIdInArray(response);
}

export async function getAnEventDetails(id) {
  await dbConnect();
  const response = await eventsModel.findById(id).lean();
  return replaceMongoIdInObject(response);
}
export async function updateInterest(eventId, userId) {
  await dbConnect();
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
export async function updateGoing(eventId, userId) {
  await dbConnect();
  const event = await eventsModel.findById(eventId);
  if (event) {
    event.going_ids.push(new mongoose.Types.ObjectId(userId));
    event.save();
    return true;
  }
}
