export default function HeroIllustration() {
  return (
    <svg viewBox="0 0 480 400" className="h-auto w-full max-w-[480px]" role="img" aria-label="Illustration of a booking calendar with a confirmed appointment">
      <rect x="20" y="30" width="440" height="340" rx="28" fill="#eff6ff" />
      <circle cx="400" cy="80" r="46" fill="#dbeafe" />
      <rect x="70" y="70" width="270" height="250" rx="18" fill="#fff" stroke="#e2e8f0" strokeWidth="2" />
      <rect x="70" y="70" width="270" height="52" rx="18" fill="#1d4ed8" />
      <rect x="70" y="100" width="270" height="22" fill="#1d4ed8" />
      <rect x="92" y="88" width="90" height="12" rx="6" fill="#fff" opacity=".9" />
      {[0, 1, 2].map((r) =>
        [0, 1, 2, 3, 4].map((c) => (
          <rect key={`${r}${c}`} x={92 + c * 46} y={142 + r * 40} width="34" height="28" rx="8"
            fill={r === 1 && c === 2 ? "#1d4ed8" : "#f1f5f9"} />
        ))
      )}
      <rect x="92" y="270" width="120" height="30" rx="8" fill="#f59e0b" />
      <rect x="108" y="282" width="88" height="7" rx="3.5" fill="#fff" />
      <circle cx="380" cy="250" r="52" fill="#fff" stroke="#e2e8f0" strokeWidth="2" />
      <circle cx="380" cy="250" r="34" fill="#dcfce7" />
      <path d="M364 250l11 11 22-24" fill="none" stroke="#16a34a" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
