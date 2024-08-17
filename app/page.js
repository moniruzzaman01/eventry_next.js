import AllEvents from "@/components/landing/AllEvents";
import Header from "@/components/landing/Header";

export default function Home() {
  return (
    <main class="py-8">
      <section class="container">
        <Header />
        <AllEvents />
      </section>
    </main>
  );
}
