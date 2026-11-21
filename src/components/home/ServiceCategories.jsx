const categories = [
  {
    title: 'Home Services',
    description: 'Electricians, plumbers, carpenters and more',
    iconBg: 'bg-[#E8F1FF]',
    iconColor: 'text-[#2563EB]',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    title: 'Cleaning Services',
    description: 'Home and office cleaning solutions',
    iconBg: 'bg-[#EAFBF3]',
    iconColor: 'text-[#10B981]',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
  {
    title: 'Education',
    description: 'Home tutors, music tutors and coaching',
    iconBg: 'bg-[#F3EEFF]',
    iconColor: 'text-[#7C3AED]',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
      </svg>
    ),
  },
  {
    title: 'Technical Services',
    description: 'Laptop, mobile and device repair',
    iconBg: 'bg-[#FFF4EB]',
    iconColor: 'text-[#F97316]',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Vehicle Services',
    description: 'Mechanics and vehicle servicing',
    iconBg: 'bg-[#EBF5FF]',
    iconColor: 'text-[#0284C7]',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 17a2 2 0 100-4 2 2 0 000 4zm8 0a2 2 0 100-4 2 2 0 000 4z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 11l2-4h12l2 4M4 11h16v5H4v-5z" />
      </svg>
    ),
  },
  {
    title: 'Personal Care',
    description: 'Salon, beauty and wellness services',
    iconBg: 'bg-[#FDF0F5]',
    iconColor: 'text-[#EC4899]',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879a3 3 0 11-4.242-4.242L12 12m0 0L9.121 9.121a3 3 0 10-4.242 4.242L12 12z" />
      </svg>
    ),
  },
]

function ServiceCategories() {
  return (
    <section id="services" className="py-10 sm:py-14">
      <div className="site-container">

        {/* Section Header with Centered Divider Lines */}
        <div className="text-center mb-8 sm:mb-10">
          <div className="flex items-center justify-center gap-3 sm:gap-4 mb-2">
            <div className="w-12 sm:w-16 h-[1.5px] bg-gray-300 rounded-full" />
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
              Our Services
            </h2>
            <div className="w-12 sm:w-16 h-[1.5px] bg-gray-300 rounded-full" />
          </div>
          <p className="text-xs sm:text-sm text-gray-500 max-w-lg mx-auto">
            Choose from a wide range of local services for your home, learning, vehicle and personal care needs.
          </p>
        </div>

        {/* 6 Category Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.03)] p-4 flex flex-col items-center text-center h-full transition-all duration-200 hover:shadow-md hover:border-violet-100"
            >
              {/* Pastel Icon Box */}
              <div className={`w-11 h-11 ${cat.iconBg} ${cat.iconColor} rounded-xl flex items-center justify-center mb-3 shadow-2xs shrink-0`}>
                {cat.icon}
              </div>

              {/* Title */}
              <h3 className="text-xs sm:text-sm font-bold text-gray-900 mb-1 leading-snug">
                {cat.title}
              </h3>

              {/* Description */}
              <p className="text-[11px] text-gray-500 leading-relaxed mt-auto">
                {cat.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default ServiceCategories
