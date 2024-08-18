import { replaceMongoIdInObject } from "@/utils/db-utils";
import { usersModel } from "../models/users";
import { dbConnect } from "../dbConnect";

export async function createUser(user) {
  await dbConnect();
  await usersModel.create(user);
}
export async function findUserWithEmailAndPassword(user) {
  await dbConnect();
  const response = await usersModel.findOne(user).lean();
  if (response) {
    return replaceMongoIdInObject(response);
  }
  return null;
}
