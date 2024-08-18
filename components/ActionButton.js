"use client";

import { addOrRemoveInterest } from "@/app/serverActions";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";

export default function ActionButton({ eventId, interested_ids }) {
  const { auth } = useAuth();
  const router = useRouter();

  const isInterested = interested_ids.find((id) => id === auth?.id);

  async function handleInterest() {
    if (!auth) {
      return router.push("/login");
    }
    await addOrRemoveInterest(eventId, auth?.id);
  }

  function handleOnGoing() {
    if (!auth) {
      return router.push("/login");
    }
    router.push("/payment");
  }

  return (
    <div className="w-full flex gap-4 mt-4 flex-1 ">
      <button
        onClick={handleInterest}
        className={`w-full ${
          isInterested && "bg-indigo-600 hover:bg-indigo-800"
        }`}
      >
        Interested
      </button>
      <button onClick={handleOnGoing} className="w-full">
        Going
      </button>
    </div>
  );
}
