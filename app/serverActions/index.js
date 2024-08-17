"use server";

import { createUser, findUserWithEmailAndPassword } from "@/db/quires/users";
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
    throw new Error(err?.message);
  }
}
