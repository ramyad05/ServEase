const steps = [
  {
    number: '1',
    title: 'Find a Service',
    description: 'Search and choose the service you need.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    number: '2',
    title: 'Book a Provider',
    description: 'Select a verified provider and choose a convenient time.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    number: '3',
    title: 'Get It Done',
    description: 'The provider arrives and completes the service.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
]

function HowItWorks() {
  return (
    <section id="about" className="py-10 sm:py-14">
      <div className="site-container">

        {/* Section Header with Centered Divider Lines */}
        <div className="text-center mb-8 sm:mb-10">
          <div className="flex items-center justify-center gap-3 sm:gap-4">
            <div className="w-12 sm:w-16 h-[1.5px] bg-gray-300 rounded-full" />
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
              How It Works
            </h2>
            <div className="w-12 sm:w-16 h-[1.5px] bg-gray-300 rounded-full" />
          </div>
        </div>

        {/* 3 Steps in a Row with Arrows */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-3 max-w-3xl mx-auto w-full">
          {steps.map((step, idx) => (
            <div key={step.number} className="flex items-center w-full md:w-auto">
              {/* Step Card with Icon on Left, Text on Right */}
              <div className="flex items-center gap-3.5 flex-1">
                {/* Lavender Icon Container with Purple Badge */}
                <div className="relative shrink-0">
                  <div className="w-12 h-12 sm:w-13 sm:h-13 bg-[#EDE8FC] rounded-2xl flex items-center justify-center text-[#5538EE] shadow-2xs">
                    {step.icon}
                  </div>
                  <span className="w-4 h-4 sm:w-5 sm:h-5 bg-[#5538EE] text-white rounded-full text-[11px] font-bold flex items-center justify-center absolute -top-1 -right-1 shadow-2xs">
                    {step.number}
                  </span>
                </div>

                {/* Text */}
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-gray-900 mb-0.5">
                    {step.title}
                  </h3>
                  <p className="text-[11px] text-gray-500 leading-snug max-w-[170px]">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Right Arrow between Steps on Desktop */}
              {idx < steps.length - 1 && (
                <div className="hidden md:flex items-center justify-center px-3 lg:px-5 text-gray-400 shrink-0">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default HowItWorks
