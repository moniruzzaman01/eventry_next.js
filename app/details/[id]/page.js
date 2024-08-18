import Details from "@/components/details/Details";
import Hero from "@/components/details/Hero";
import Location from "@/components/details/Location";
import { getAnEventDetails } from "@/db/quires/events";

export async function generateMetadata({ params }) {
  const { name, details } = await getAnEventDetails(params?.id);

  return {
    title: `Eventry | ${name}`,
    description: details,
  };
}

export default async function EventDetails({ params: { id } }) {
  const eventDetails = await getAnEventDetails(id);
  const { details, swags, location } = eventDetails || {};

  return (
    <section className="container">
      <Hero eventDetails={eventDetails} />
      <div className="grid grid-cols-5 gap-12 my-12">
        <Details details={details} swags={swags} />
        <Location location={location} />
      </div>
    </section>
  );
}
