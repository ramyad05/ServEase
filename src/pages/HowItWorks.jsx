import Container from "../components/common/Container";

const steps = [
  { title: "Find a Service", text: "Explore service categories and find the right professional." },
  { title: "Book a Provider", text: "Choose a suitable provider and request an appointment." },
  { title: "Get It Done", text: "Get your service completed conveniently." },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-slate-50 py-12 sm:py-16 md:py-20">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">How ServEase Works</h2>
          <p className="mt-3 text-muted">Booking a trusted professional is simple.</p>
        </div>
        <ol className="mt-8 grid gap-4 sm:mt-12 sm:gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <li key={s.title} className="rounded-xl border border-line bg-white p-5 text-center shadow-sm sm:p-6">
              <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-brand-600 text-lg font-bold text-white">
                {i + 1}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-ink sm:mt-5">{s.title}</h3>
              <p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-muted">{s.text}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
