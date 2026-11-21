import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Container from "../components/common/Container";
import ServiceCard from "../features/services/ServiceCard";
import { categories } from "../features/services/categories";
import HeroSection from "./HeroSection";
import HowItWorks from "./HowItWorks";
import CallToAction from "./CallToAction";

export default function Home() {
  const { hash } = useLocation();

  // Scroll to #services / #how-it-works when navigating via router links.
  useEffect(() => {
    if (hash) document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
  }, [hash]);

  return (
    <>
      <Navbar />
      <main>
        <HeroSection />

        <section id="services" className="py-12 sm:py-16 md:py-20">
          <Container>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">Explore Our Services</h2>
              <p className="mt-3 text-muted">Find the right professionals for your everyday needs.</p>
            </div>
            <div className="mt-8 grid grid-cols-1 gap-4 min-[360px]:grid-cols-2 sm:mt-12 sm:gap-6 lg:grid-cols-3">
              {categories.map((c) => <ServiceCard key={c.name} {...c} />)}
            </div>
          </Container>
        </section>

        <HowItWorks />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
