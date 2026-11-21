import { useState } from 'react'
import HeroIllustration from './HeroIllustration'

function HeroSection() {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = (e) => {
    e.preventDefault()
    console.log('Searching for:', searchQuery)
  }

  return (
    <section className="relative overflow-hidden pt-6 pb-8 sm:pt-8 sm:pb-12 lg:pt-10 lg:pb-14">
      {/* Subtle Pastel Waves in Background */}
      <div className="absolute top-0 left-0 w-64 h-72 pointer-events-none opacity-40 -translate-x-12 -translate-y-12">
        <svg viewBox="0 0 200 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M 0,0 L 120,0 C 70,70 30,130 65,190 C 90,225 75,235 0,240 Z" fill="#E4D7FA" />
        </svg>
      </div>

      <div className="site-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">

          {/* Left Column (7 cols): Heading, Tagline, Description, Search Bar */}
          <div className="lg:col-span-7">
            <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-gray-900 leading-[1.15] tracking-tight">
              Book Local <span className="text-[#5538EE]">Services</span>
              <br />
              Near You
            </h1>

            <p className="mt-3 sm:mt-4 text-base sm:text-lg font-bold text-gray-900 tracking-normal">
              Local Services. Easy Bookings.
            </p>

            <p className="mt-1.5 text-xs sm:text-sm text-gray-500 leading-relaxed max-w-md mb-6 sm:mb-8">
              Find trusted and verified service providers for your everyday needs, all in one place.
            </p>

            {/* Compact Search Interface with Reasonable Max-Width */}
            <form onSubmit={handleSearch} className="w-full max-w-[420px]">
              <div className="flex items-center bg-white rounded-2xl shadow-[0_2px_14px_rgba(85,56,238,0.06)] border border-gray-200/90 p-1.5 transition-all hover:shadow-[0_4px_20px_rgba(85,56,238,0.12)]">
                <div className="pl-3 pr-2 text-gray-400 shrink-0">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for a service (e.g., plumber, tutor, cleaning)"
                  className="w-full py-1.5 px-1 text-xs sm:text-sm text-gray-800 placeholder-gray-400 bg-transparent focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-[#5538EE] hover:bg-[#482ee0] text-white px-5 sm:px-6 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-colors shrink-0 shadow-xs cursor-pointer"
                >
                  Search
                </button>
              </div>
            </form>
          </div>

          {/* Right Column (5 cols): Balanced Artwork */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <HeroIllustration />
          </div>

        </div>
      </div>
    </section>
  )
}

export default HeroSection
