"use server";

import EmailTemplate from "@/components/EmailTemplate";
import {
  getAnEventDetails,
  updateGoing,
  updateInterest,
} from "@/db/quires/events";
import { createUser, findUserWithEmailAndPassword } from "@/db/quires/users";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);

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
export async function addGoing(eventId, user) {
  try {
    const isGoing = await updateGoing(eventId, user?.id);
    if (isGoing) {
      const mailSend = await sendEmail(eventId, user);
      revalidatePath("/");
      redirect("/");
    }
  } catch (err) {
    throw err;
  }
}
export async function sendEmail(eventId, user) {
  const event = await getAnEventDetails(eventId);

  const { data, error } = await resend.emails.send({
    from: "Acme <onboarding@resend.dev>",
    to: user.email,
    subject: "Registration confirmation.",
    react: <EmailTemplate user={user} eventName={event.name} />,
  });

  if (error) {
    throw error;
  }
  return data;
}
