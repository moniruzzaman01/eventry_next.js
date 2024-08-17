import Details from "@/components/details/Details";
import Hero from "@/components/details/Hero";
import Location from "@/components/details/Location";

export default function EventDetails() {
  return (
    <section className="container">
      <Hero />
      <div className="grid grid-cols-5 gap-12 my-12">
        <Details />
        <Location />
      </div>
    </section>
  );
}
