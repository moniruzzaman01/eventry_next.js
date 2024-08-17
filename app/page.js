import AllEvents from "@/components/landing/AllEvents";
import Header from "@/components/landing/Header";

export default function Home() {
  return (
    <section className="container">
      <Header />
      <AllEvents />
    </section>
  );
}
