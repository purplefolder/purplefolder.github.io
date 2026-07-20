import { useScrollAnimation } from '../hooks/useScrollAnimation'

function AnimatedDiv({ children, direction = 'up', delay = 0, className = '' }) {
  const [ref, isVisible] = useScrollAnimation()

  const initial = {
    up: 'translateY(40px)',
    left: 'translateX(-40px)',
    right: 'translateX(40px)',
  }[direction]

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translate(0)' : initial,
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}

const highlights = [
  'Senior engineering team building software since 2014',
  'Clear, responsive communication on every project',
  'Dedicated teams and long-term engineering partnerships',
  'Full-stack web, backend, and AI-powered products',
]

export default function About() {
  return (
    <section className="py-24 bg-white" id="about">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left column */}
          <AnimatedDiv direction="left">
            <p className="text-purple-600 font-semibold text-sm uppercase tracking-widest mb-3">
              Who We Are
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
              About{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">
                Purple Folder
              </span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              We&apos;re a team of software engineers who&apos;ve been building
              web applications, backend systems, and AI-powered products since
              2014.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              We work as a dedicated extension of our clients&apos; teams —
              international and local — delivering high-quality software on
              time. Clear communication and reliability are what keep our
              partnerships long-term.
            </p>

            <ul className="space-y-3">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <i className="fas fa-circle-check text-purple-500 text-xl flex-shrink-0" />
                  <span className="text-gray-700 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </AnimatedDiv>

          {/* Right column */}
          <div className="space-y-4">
            <AnimatedDiv direction="right" delay={100}>
              <div className="bg-gradient-to-br from-purple-600 to-indigo-600 rounded-3xl p-8 text-white">
                <div className="text-5xl font-black mb-2">12+</div>
                <div className="text-purple-200 font-medium">
                  Years of Experience
                </div>
                <div className="text-purple-300 text-sm mt-1">
                  Continuously growing since 2014
                </div>
              </div>
            </AnimatedDiv>

            <div className="grid grid-cols-2 gap-4">
              <AnimatedDiv direction="right" delay={200}>
                <div className="bg-purple-50 rounded-3xl p-6">
                  <div className="text-4xl font-black text-purple-700 mb-2">
                    9+
                  </div>
                  <div className="text-gray-700 font-medium text-sm">
                    Global Clients
                  </div>
                  <div className="text-gray-400 text-xs mt-1">
                    Across 4 countries
                  </div>
                </div>
              </AnimatedDiv>

              <AnimatedDiv direction="right" delay={300}>
                <div className="bg-indigo-50 rounded-3xl p-6">
                  <div className="text-4xl font-black text-indigo-700 mb-2">
                    100%
                  </div>
                  <div className="text-gray-700 font-medium text-sm">
                    Satisfaction Focus
                  </div>
                  <div className="text-gray-400 text-xs mt-1">
                    Always responsive
                  </div>
                </div>
              </AnimatedDiv>
            </div>

            <AnimatedDiv direction="right" delay={400}>
              <div className="bg-gray-50 rounded-3xl p-6 border border-gray-100">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-2xl flex items-center justify-center">
                    <span className="text-purple-600 text-lg">🌍</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">
                      Global Reach
                    </div>
                    <div className="text-gray-400 text-xs">
                      UK · US · Australia · Nepal
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  From Kathmandu to the world — we work seamlessly across
                  time zones to keep your projects moving.
                </p>
              </div>
            </AnimatedDiv>
          </div>
        </div>
      </div>
    </section>
  )
}
