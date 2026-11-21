import { Link } from "react-router-dom";
import Container from "../common/Container";
import Logo from "../common/Logo";
import { categories } from "../../features/services/categories";

const quick = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/#services" },
  { label: "About", to: "/#how-it-works" },
  { label: "Login", to: "/login" },
  { label: "Register", to: "/register" },
];

const h = "text-sm font-semibold text-white";
const a = "inline-block py-1 text-sm text-slate-300 hover:text-white";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <Container className="grid grid-cols-1 gap-8 py-10 sm:grid-cols-2 sm:gap-10 sm:py-14 lg:grid-cols-4">
        <div className="sm:col-span-2 lg:col-span-1">
          <Logo light />
          <p className="mt-4 max-w-xs text-sm leading-relaxed">
            ServEase connects customers with trusted local service professionals. Local Services. Easy Bookings.
          </p>
        </div>
        <div>
          <h3 className={h}>Quick Links</h3>
          <ul className="mt-3 space-y-1">
            {quick.map((l) => <li key={l.label}><Link to={l.to} className={a}>{l.label}</Link></li>)}
          </ul>
        </div>
        <div>
          <h3 className={h}>Services</h3>
          <ul className="mt-3 space-y-1">
            {categories.map((c) => <li key={c.name}><Link to="/#services" className={a}>{c.name}</Link></li>)}
          </ul>
        </div>
        <div className="min-w-0">
          <h3 className={h}>Contact</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li>Email: [placeholder – to be added]</li>
            <li>Phone: [placeholder – to be added]</li>
            <li>Address: [placeholder – to be added]</li>
          </ul>
        </div>
      </Container>
      <div className="border-t border-slate-800">
        <Container className="py-5 text-sm text-slate-400">
          © {new Date().getFullYear()} ServEase. All rights reserved.
        </Container>
      </div>
    </footer>
  );
}
