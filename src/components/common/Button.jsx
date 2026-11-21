import { Link } from "react-router-dom";

const variants = {
  primary: "bg-brand-600 text-white hover:bg-brand-700 border-transparent",
  outline: "bg-white text-brand-700 border-brand-600 hover:bg-brand-50",
  light: "bg-white text-brand-700 border-transparent hover:bg-brand-50",
  ghostLight: "bg-transparent text-white border-white/70 hover:bg-white/10",
};

export default function Button({ to, variant = "primary", className = "", children, ...props }) {
  const classes = `inline-flex items-center justify-center rounded-lg border px-5 py-2.5 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600 ${variants[variant]} ${className}`;
  if (to) return <Link to={to} className={classes} {...props}>{children}</Link>;
  return <button className={classes} {...props}>{children}</button>;
}
