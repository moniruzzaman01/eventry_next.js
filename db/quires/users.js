import { replaceMongoIdInObject } from "@/utils/db-utils";
import { usersModel } from "../models/users";

export async function createUser(user) {
  await usersModel.create(user);
}
export async function findUserWithEmailAndPassword(user) {
  const response = await usersModel.findOne(user).lean();
  if (response) {
    return replaceMongoIdInObject(response);
  }
  throw new Error("Invalid email or password");
}
