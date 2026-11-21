import { Link } from 'react-router-dom'

function CallToAction() {
  return (
    <section className="pt-2 pb-10 sm:pb-14">
      <div className="site-container">
        <div className="bg-[#5538EE] rounded-2xl sm:rounded-3xl px-6 sm:px-10 lg:px-12 py-6 sm:py-7 flex flex-col sm:flex-row items-center justify-between gap-5 relative overflow-hidden shadow-lg shadow-purple-500/15 w-full">

          {/* Decorative Subtle Darker Purple Organic Wave on Right */}
          <div className="absolute -right-10 -bottom-10 w-56 h-56 bg-[#4628E0] rounded-full opacity-60 pointer-events-none" />

          {/* Left Text */}
          <div className="relative z-10 text-center sm:text-left">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-1 tracking-tight">
              Ready to get started?
            </h2>
            <p className="text-purple-200 text-xs sm:text-sm">
              Book trusted local services with ServEase today.
            </p>
          </div>

          {/* Right Buttons */}
          <div className="relative z-10 flex items-center gap-3 shrink-0">
            <Link
              to="/login"
              className="border border-white/70 bg-transparent hover:bg-white/10 text-white font-semibold text-xs sm:text-sm rounded-xl px-5 py-2 transition-colors"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="bg-white hover:bg-gray-50 text-[#5538EE] font-bold text-xs sm:text-sm rounded-xl px-5 py-2 shadow-sm transition-colors"
            >
              Register Now
            </Link>
          </div>

        </div>
      </div>
    </section>
  )
}

export default CallToAction
