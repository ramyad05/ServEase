function HeroIllustration() {
  return (
    <div className="w-full max-w-[420px] lg:max-w-[460px] mx-auto select-none">
      <svg
        viewBox="0 0 460 350"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto drop-shadow-xs"
      >
        <defs>
          <filter id="phoneShadow" x="-10%" y="-10%" width="125%" height="125%" filterUnits="userSpaceOnUse">
            <feDropShadow dx="0" dy="6" stdDeviation="10" floodColor="#5538EE" floodOpacity="0.08" />
          </filter>
        </defs>

        {/* 1. Soft Lavender Background Blob */}
        <path
          d="M 310,40 C 400,45 440,120 435,210 C 430,300 360,340 270,335 C 190,330 170,270 190,190 C 210,110 230,35 310,40 Z"
          fill="#EDE8FC"
        />

        {/* 2. Plant Leaves Left */}
        <g transform="translate(160, 150)">
          <path d="M 40,110 Q 15,65 -8,25" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          <ellipse cx="22" cy="80" rx="12" ry="6" fill="#34D399" transform="rotate(-35 22 80)" />
          <ellipse cx="4" cy="52" rx="14" ry="7" fill="#10B981" transform="rotate(-55 4 52)" />
          <ellipse cx="-10" cy="20" rx="12" ry="6" fill="#34D399" transform="rotate(-75 -10 20)" />
          <ellipse cx="32" cy="95" rx="11" ry="5" fill="#10B981" transform="rotate(25 32 95)" />
          <ellipse cx="14" cy="65" rx="12" ry="6" fill="#34D399" transform="rotate(15 14 65)" />
        </g>

        {/* 3. Plant Leaves Right */}
        <g transform="translate(380, 140)">
          <path d="M -15,130 Q 15,80 28,30" stroke="#10B981" strokeWidth="3" strokeLinecap="round" fill="none" />
          <ellipse cx="-2" cy="95" rx="15" ry="7" fill="#34D399" transform="rotate(35 -2 95)" />
          <ellipse cx="14" cy="68" rx="15" ry="7.5" fill="#10B981" transform="rotate(25 14 68)" />
          <ellipse cx="26" cy="32" rx="13" ry="6.5" fill="#34D399" transform="rotate(10 26 32)" />
          <ellipse cx="-10" cy="112" rx="12" ry="6" fill="#10B981" transform="rotate(-25 -10 112)" />
          <ellipse cx="6" cy="84" rx="13" ry="6" fill="#34D399" transform="rotate(-30 6 84)" />
        </g>

        {/* 4. Giant Smartphone Standing Upright on the Right */}
        <g transform="translate(230, 25)" filter="url(#phoneShadow)">
          {/* Bezel */}
          <rect x="0" y="0" width="168" height="310" rx="28" fill="#232A46" />
          {/* Speaker notch */}
          <rect x="58" y="9" width="48" height="5.5" rx="2.8" fill="#161C32" />
          <circle cx="116" cy="11.5" r="2.2" fill="#161C32" />

          {/* Screen */}
          <rect x="6.5" y="22" width="155" height="280" rx="23" fill="#FFFFFF" />

          {/* Screen Brand Header */}
          <g transform="translate(28, 38)">
            <rect x="0" y="0" width="20" height="20" rx="5" fill="#5538EE" />
            <text x="10" y="15" fill="#FFFFFF" fontSize="12" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle">S</text>
            <text x="26" y="15" fill="#1E243A" fontSize="12" fontWeight="bold" fontFamily="sans-serif">ServEase</text>
          </g>

          {/* Checklist Item 1: Find Services */}
          <g transform="translate(22, 90)">
            <circle cx="9" cy="9" r="9" fill="#22C55E" />
            <path d="M 5.5,9 L 8,11.5 L 12.5,6.5" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <text x="24" y="13" fill="#374151" fontSize="10.5" fontWeight="600" fontFamily="sans-serif">Find Services</text>
          </g>

          {/* Checklist Item 2: Book Provider */}
          <g transform="translate(22, 126)">
            <circle cx="9" cy="9" r="9" fill="#22C55E" />
            <path d="M 5.5,9 L 8,11.5 L 12.5,6.5" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <text x="24" y="13" fill="#374151" fontSize="10.5" fontWeight="600" fontFamily="sans-serif">Book Provider</text>
          </g>

          {/* Checklist Item 3: Get It Done */}
          <g transform="translate(22, 162)">
            <circle cx="9" cy="9" r="9" fill="#22C55E" />
            <path d="M 5.5,9 L 8,11.5 L 12.5,6.5" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <text x="24" y="13" fill="#374151" fontSize="10.5" fontWeight="600" fontFamily="sans-serif">Get It Done</text>
          </g>
        </g>

        {/* 5. Decorative Action Sparkle Marks near woman's head */}
        <g stroke="#5538EE" strokeWidth="2.5" strokeLinecap="round">
          <line x1="145" y1="105" x2="136" y2="114" />
          <line x1="152" y1="92" x2="150" y2="80" />
        </g>

        {/* 6. Woman Character Beside Phone (Proper Proportion & Non-awkward Overlap) */}
        <g transform="translate(100, 65)">
          {/* Back Hair */}
          <path
            d="M 115,55 C 92,38 78,60 74,86 C 70,108 60,125 64,152 C 68,172 85,182 98,182 C 115,182 125,170 130,156 Z"
            fill="#1E243A"
          />

          {/* Neck */}
          <rect x="116" y="120" width="18" height="22" rx="5" fill="#FBC593" />

          {/* Face */}
          <ellipse cx="126" cy="96" rx="22" ry="25" fill="#FBC593" />

          {/* Hair Front & Bangs */}
          <path
            d="M 106,86 C 106,58 122,46 142,50 C 158,54 156,70 152,82 C 146,76 130,74 120,86 C 112,96 106,98 106,86 Z"
            fill="#1E243A"
          />
          <path
            d="M 144,78 C 152,90 154,110 150,124 C 146,132 142,136 138,132 C 140,120 138,100 135,86 Z"
            fill="#1E243A"
          />

          {/* Facial Features */}
          <path d="M 119,88 Q 124,85 129,88" stroke="#1E243A" strokeWidth="1.5" strokeLinecap="round" fill="none" />
          <path d="M 136,88 Q 141,85 146,88" stroke="#1E243A" strokeWidth="1.5" strokeLinecap="round" fill="none" />
          <circle cx="124" cy="95" r="2.2" fill="#1E243A" />
          <circle cx="141" cy="95" r="2.2" fill="#1E243A" />
          <path d="M 127,105 Q 133,112 138,105" stroke="#D9534F" strokeWidth="1.8" strokeLinecap="round" fill="none" />

          {/* Purple Blouse */}
          <path
            d="M 102,142 C 112,138 138,138 152,142 C 162,148 166,162 168,190 L 94,190 C 92,164 94,148 102,142 Z"
            fill="#5538EE"
          />

          {/* Arms holding her phone */}
          <path d="M 98,146 Q 90,175 108,202 L 126,198 Q 110,170 114,149 Z" fill="#FBC593" />
          <path d="M 158,146 Q 168,170 158,198 L 142,195 Q 148,170 144,149 Z" fill="#FBC593" />

          {/* Woman's Phone */}
          <rect x="124" y="168" width="20" height="34" rx="4" fill="#1E243A" transform="rotate(-5 124 168)" />
          <rect x="126" y="171" width="16" height="28" rx="2.5" fill="#93C5FD" transform="rotate(-5 126 171)" />

          {/* Hands */}
          <circle cx="122" cy="188" r="5.5" fill="#FBC593" />
          <circle cx="146" cy="185" r="5.5" fill="#FBC593" />
        </g>
      </svg>
    </div>
  )
}

export default HeroIllustration
