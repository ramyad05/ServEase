import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Container from "../common/Container";
import Logo from "../common/Logo";
import Button from "../common/Button";
import ThemeToggle from "../common/ThemeToggle";

const links = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/#services" },
  { label: "About", to: "/#how-it-works" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Close the mobile menu after any navigation (including hash changes).
  useEffect(() => {
    setOpen(false);
  }, [location.pathname, location.hash]);

  // Close the mobile menu with the Escape key.
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/95 backdrop-blur">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Logo />

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {links.map((l) => (
            <Link
              key={l.label}
              to={l.to}
              className="text-sm font-medium text-muted transition-colors hover:text-brand-600"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Desktop: theme toggle + Login + Register */}
        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <Link to="/login" className="px-3 py-2 text-sm font-semibold text-ink hover:text-brand-600">
            Login
          </Link>
          <Button to="/register">Register</Button>
        </div>

        {/* Mobile: theme toggle + hamburger */}
        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="-mr-2 flex h-11 w-11 items-center justify-center rounded-lg text-ink hover:bg-brand-50"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
          >
            <svg
              viewBox="0 0 24 24"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </Container>

      {open && (
        <div id="mobile-menu" className="border-t border-line bg-white md:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {links.map((l) => (
              <Link
                key={l.label}
                to={l.to}
                className="rounded-lg px-3 py-3 text-base font-medium text-ink hover:bg-brand-50"
              >
                {l.label}
              </Link>
            ))}
            <div className="mt-3 grid grid-cols-2 gap-3">
              <Button to="/login" variant="outline" className="py-3">Login</Button>
              <Button to="/register" className="py-3">Register</Button>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
