export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0f0720] via-[#2d1060] to-[#4c1d95]">
      {/* Decorative blobs */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-purple-600 rounded-full filter blur-3xl opacity-25 animate-pulse" />
      <div
        className="absolute bottom-1/4 -right-20 w-96 h-96 bg-indigo-500 rounded-full filter blur-3xl opacity-20 animate-pulse"
        style={{ animationDelay: '2s' }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-violet-700 rounded-full filter blur-3xl opacity-15 animate-pulse"
        style={{ animationDelay: '4s' }}
      />

      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            'radial-gradient(circle, #a78bfa 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto -mt-20">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-purple-200 text-sm font-medium px-4 py-2 rounded-full mb-8 border border-white/15">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          Based in Kathmandu, Nepal · Working globally since 2014
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-8xl font-black text-white mb-6 leading-[1.05] tracking-tight">
          We Build{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-pink-300 to-indigo-300 drop-shadow-[0_0_40px_rgba(192,132,252,0.3)]">
            What Matters.
          </span>
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-purple-200 mb-3 font-light max-w-2xl mx-auto leading-relaxed">
          We build and ship web apps, backend systems, and AI-powered products
          as a dedicated extension of your team.
        </p>
        <p className="text-sm md:text-base text-purple-300/60 mb-12 max-w-xl mx-auto">
          Software engineers trusted by companies across the UK, US,
          Australia, and Nepal since 2014.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://calendly.com/purple-folder/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-purple-900 font-bold px-8 py-4 rounded-full hover:bg-purple-50 transition-all duration-200 shadow-lg hover:shadow-2xl hover:-translate-y-0.5 text-sm sm:text-base"
          >
            Book a Call
          </a>
          <a
            href="#products"
            className="bg-white/10 backdrop-blur-sm text-white font-bold px-8 py-4 rounded-full border border-white/25 hover:bg-white/20 transition-all duration-200 hover:-translate-y-0.5 text-sm sm:text-base"
          >
            See Our Products
          </a>
        </div>

      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 80L60 69C120 58 240 36 360 26C480 16 600 16 720 27C840 38 960 59 1080 64C1200 69 1320 58 1380 53L1440 48V80H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  )
}
