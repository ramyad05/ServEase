import Container from "../components/common/Container";
import Button from "../components/common/Button";

export default function CallToAction() {
  return (
    <section className="py-12 sm:py-16 md:py-20">
      <Container>
        <div className="rounded-2xl bg-brand-900 px-5 py-10 text-center sm:px-8 sm:py-12 md:px-12">
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">Ready to Get Started?</h2>
          <p className="mx-auto mt-3 max-w-xl text-brand-100">
            Find the right professional for your needs with ServEase.
          </p>
          <div className="mx-auto mt-8 flex max-w-xs flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center">
            <Button to="/login" variant="light" className="py-3 sm:min-w-36">Login</Button>
            <Button to="/register" variant="ghostLight" className="py-3 sm:min-w-36">Register</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
