import {
  replaceMongoIdInArray,
  replaceMongoIdInObject,
} from "@/utils/db-utils";
import { eventsModel } from "../models/events";

export async function getAllEvents() {
  const response = await eventsModel.find().lean();
  return replaceMongoIdInArray(response);
}

export async function getAnEventDetails(id) {
  const response = await eventsModel.findById(id).lean();
  return replaceMongoIdInObject(response);
}
