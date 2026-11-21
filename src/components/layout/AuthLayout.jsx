import Navbar from "./Navbar";
import Container from "../common/Container";

export default function AuthLayout({ title, subtitle, wide = false, children }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 bg-gradient-to-b from-brand-50 to-white py-10 sm:py-14">
        <Container>
          <div
            className={`mx-auto w-full ${wide ? "max-w-2xl" : "max-w-md"} rounded-2xl border border-line bg-white p-5 shadow-sm sm:p-8`}
          >
            <div className="mb-6 text-center sm:mb-8">
              <h1 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">{title}</h1>
              {subtitle && <p className="mt-2 text-sm text-muted sm:text-base">{subtitle}</p>}
            </div>
            {children}
          </div>
        </Container>
      </main>
    </div>
  );
}
