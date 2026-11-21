const Icon = ({ children }) => (
  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {children}
  </svg>
);

export const categories = [
  {
    name: "Home Services",
    description: "Electricians, plumbers and carpenters for your home.",
    icon: <Icon><path d="M3 11l9-7 9 7" /><path d="M5 10v10h14V10" /><path d="M10 20v-6h4v6" /></Icon>,
  },
  {
    name: "Cleaning Services",
    description: "Professional cleaning for your home and spaces.",
    icon: <Icon><path d="M14 3l7 7" /><path d="M13 4l-9 9 4 4 9-9" /><path d="M5 20l3-3" /><path d="M3 21l2-2" /></Icon>,
  },
  {
    name: "Education",
    description: "Find tutors for academic subjects and music lessons.",
    icon: <Icon><path d="M2 9l10-5 10 5-10 5z" /><path d="M6 11.5V16c0 1.5 3 3 6 3s6-1.5 6-3v-4.5" /></Icon>,
  },
  {
    name: "Technical Services",
    description: "Get help with laptop and mobile repairs.",
    icon: <Icon><rect x="4" y="5" width="16" height="11" rx="1.5" /><path d="M2 20h20" /></Icon>,
  },
  {
    name: "Vehicle Services",
    description: "Find mechanics and vehicle maintenance services.",
    icon: <Icon><path d="M5 16V11l2-5h10l2 5v5" /><path d="M3 16h18v3H3z" /><circle cx="7.5" cy="13.5" r=".8" /><circle cx="16.5" cy="13.5" r=".8" /></Icon>,
  },
  {
    name: "Personal Care",
    description: "Discover beauty and personal grooming services.",
    icon: <Icon><circle cx="6" cy="18" r="2.5" /><circle cx="6" cy="6" r="2.5" /><path d="M8 7.5L20 18" /><path d="M8 16.5L20 6" /></Icon>,
  },
];
