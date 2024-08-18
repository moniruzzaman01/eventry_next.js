import { getAllEvents } from "@/db/quires/events";
import SingleEvent from "./SingleEvent";

export default async function AllEvents({ query }) {
  const events = await getAllEvents(query);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
      {events?.map((event) => (
        <SingleEvent key={event.id} event={event} />
      ))}
    </div>
  );
}
