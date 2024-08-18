import AllEvents from "@/components/landing/AllEvents";
import Header from "@/components/landing/Header";

export default function Home({ searchParams: { query } }) {
  return (
    <section className="container">
      <Header />
      <AllEvents query={query} />
    </section>
  );
}
