import { replaceMongoIdInArray } from "@/utils/db-utils";
import { eventsModel } from "../models/events";

export async function getAllEvents() {
  const response = await eventsModel.find().lean();
  return replaceMongoIdInArray(response);
}
