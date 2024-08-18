"use server";

import { updateGoing, updateInterest } from "@/db/quires/events";
import { createUser, findUserWithEmailAndPassword } from "@/db/quires/users";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function registerUser(formData) {
  const user = Object.fromEntries(formData);
  await createUser(user);
  redirect("/login");
}

export async function loginUser(formData) {
  try {
    let credentials = {};
    credentials.email = formData.get("email");
    credentials.password = formData.get("password");
    const response = await findUserWithEmailAndPassword(credentials);
    return response;
  } catch (err) {
    throw err;
  }
}
export async function addOrRemoveInterest(eventId, userId) {
  try {
    const isUpdated = await updateInterest(eventId, userId);
    if (isUpdated) {
      revalidatePath("/");
    }
  } catch (err) {
    throw err;
  }
}
export async function addGoing(eventId, userId) {
  try {
    const isGoing = await updateGoing(eventId, userId);
    if (isGoing) {
      revalidatePath("/");
      redirect("/");
    }
  } catch (err) {
    throw err;
  }
}
