import { useState, useEffect, useCallback } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const testimonials = [
  {
    name: 'Glen Freeman',
    company: 'Property Data Engine',
    country: 'UK',
    initials: 'GF',
    color: 'bg-emerald-500',
    text: 'They are highly committed to meeting our ambitious deadlines whilst maintaining the high quality of their works. They go above and beyond to meet expectations and will be an asset to any project.',
  },
  {
    name: 'Rajesh Shrestha',
    company: 'Premier Insurance Co. (Nepal) Ltd',
    country: 'Nepal',
    initials: 'RS',
    color: 'bg-blue-500',
    text: 'I highly recommend both working and partnership with Purple Folder Team, if you\'re serious about getting your projects done. Here you\'ll find an inspiring project engineering and a top domain expert team, which will surely help you skyrocket your business.',
    linkedin: 'https://www.linkedin.com/in/rajesh-shrestha-00745465/',
  },
  {
    name: 'Jeyaruban Kandaya',
    company: 'Teleworker',
    country: 'International',
    initials: 'JK',
    color: 'bg-violet-500',
    text: 'Purple Folder completed the job ahead of time and were always timely and efficient. They answered all of our questions and worked with our current team/tech stack to successfully finalize the project.',
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [animating, setAnimating] = useState(false)
  const [direction, setDirection] = useState('right')
  const [headerRef, headerVisible] = useScrollAnimation()

  const goTo = useCallback((index, dir = 'right') => {
    if (animating) return
    setAnimating(true)
    setDirection(dir)
    setTimeout(() => {
      setCurrent(index)
      setAnimating(false)
    }, 400)
  }, [animating])

  const next = useCallback(() => {
    goTo((current + 1) % testimonials.length, 'right')
  }, [current, goTo])

  const prev = useCallback(() => {
    goTo((current - 1 + testimonials.length) % testimonials.length, 'left')
  }, [current, goTo])

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const t = testimonials[current]

  return (
    <section className="py-24 bg-gradient-to-br from-[#0f0720] via-[#2d1060] to-[#4c1d95] relative overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            'radial-gradient(circle, #a78bfa 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
      <div className="absolute top-0 left-0 right-0 pointer-events-none rotate-180">
        <svg viewBox="0 0 1440 60" fill="none" className="w-full" preserveAspectRatio="none">
          <path d="M0 60L60 51C120 42 240 24 360 18C480 12 600 18 720 24C840 30 960 36 1080 39C1200 42 1320 42 1380 42L1440 42V0H0Z" fill="white" />
        </svg>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
        <div
          ref={headerRef}
          className="text-center mb-12"
          style={{
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.7s ease, transform 0.7s ease',
          }}
        >
          <p className="text-purple-300 font-semibold text-sm uppercase tracking-widest mb-3">
            Client Stories
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
            Happy Clients
          </h2>
          <p className="text-purple-300/70 max-w-lg mx-auto text-base">
            &ldquo;A customer talking about their experience with you is worth ten times
            that which you write or say about yourself.&rdquo;
            <br />
            <span className="text-purple-400 text-sm">— David J. Greer</span>
          </p>
        </div>

        {/* Card */}
        <div className="relative">
          <div
            className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-3xl p-8 sm:p-12"
            style={{
              opacity: animating ? 0 : 1,
              transform: animating
                ? `translateX(${direction === 'right' ? '-30px' : '30px'})`
                : 'translateX(0)',
              transition: 'opacity 0.35s ease, transform 0.35s ease',
            }}
          >
            <Quote
              size={48}
              className="text-purple-400/40 mb-6"
            />
            <p className="text-white text-lg sm:text-xl leading-relaxed mb-8 font-light">
              &ldquo;{t.text}&rdquo;
            </p>

            <div className="flex items-center gap-4">
              <div
                className={`w-12 h-12 ${t.color} rounded-2xl flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}
              >
                {t.initials}
              </div>
              <div>
                <div className="text-white font-semibold">{t.name}</div>
                <div className="text-purple-300 text-sm">
                  {t.company} · {t.country}
                </div>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-8">
            <button
              onClick={prev}
              className="w-11 h-11 bg-white/10 hover:bg-white/20 border border-white/20 rounded-2xl flex items-center justify-center text-white transition-colors"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i, i > current ? 'right' : 'left')}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current
                      ? 'w-8 bg-white'
                      : 'w-2 bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-11 h-11 bg-white/10 hover:bg-white/20 border border-white/20 rounded-2xl flex items-center justify-center text-white transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg viewBox="0 0 1440 60" fill="none" className="w-full" preserveAspectRatio="none">
          <path d="M0 60L60 51C120 42 240 24 360 18C480 12 600 18 720 24C840 30 960 36 1080 39C1200 42 1320 42 1380 42L1440 42V60H0Z" fill="#f9fafb" />
        </svg>
      </div>
    </section>
  )
}
