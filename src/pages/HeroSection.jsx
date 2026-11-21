import { useState } from "react";
import Container from "../components/common/Container";
import Button from "../components/common/Button";
import HeroIllustration from "../components/layout/HeroIllustration";

export default function HeroSection() {
  const [query, setQuery] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault(); // Placeholder: real search arrives with the backend phase.
  };

  return (
    <section className="bg-gradient-to-b from-brand-50 to-white">
      <Container className="grid items-center gap-10 py-10 sm:py-14 md:py-20 lg:grid-cols-2 lg:gap-12">
        <div className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-600 sm:text-sm">
            Local Services. Easy Bookings.
          </p>
          <h1 className="mt-4 max-w-xl text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl md:text-5xl">
            Find Trusted Local Services Near You
          </h1>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-muted sm:mt-5 sm:text-lg">
            Discover trusted professionals for your everyday needs. Find the right service, book conveniently and get things done.
          </p>

          <form
            onSubmit={handleSubmit}
            role="search"
            className="mt-7 flex max-w-lg flex-col gap-3 sm:mt-8 sm:flex-row"
          >
            <label htmlFor="service-search" className="sr-only">Search for a service</label>
            <input
              id="service-search"
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for a service, e.g. plumber"
              className="w-full min-w-0 rounded-lg border border-line bg-white px-4 py-3 text-base text-ink shadow-sm placeholder:text-slate-400 focus:border-brand-600 focus:outline-2 focus:outline-brand-100 sm:flex-1 sm:text-sm"
            />
            <Button type="submit" className="w-full py-3 sm:w-auto">Search</Button>
          </form>

          <p className="mt-5 text-sm text-muted">
            New here? <a href="#services" className="font-semibold text-brand-600 hover:underline">Browse all services</a>
          </p>
        </div>

        <div className="flex min-w-0 justify-center lg:justify-end">
          <HeroIllustration />
        </div>
      </Container>
    </section>
  );
}
