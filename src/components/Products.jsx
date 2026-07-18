import { useScrollAnimation } from '../hooks/useScrollAnimation'

function AnimatedDiv({ children, delay = 0, className = '' }) {
  const [ref, isVisible] = useScrollAnimation()
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}

const products = [
  {
    name: 'Sports Hub',
    image: '/images/sports_hub.png',
    description:
      'Manage bookings, memberships, teams, and analytics — all from one beautiful dashboard. Built for Nepal\'s growing sports industry.',
    url: 'https://sportshub-840.pages.dev/',
    tag: 'Sports Management',
    color: 'from-emerald-500 to-teal-600',
    bg: 'bg-emerald-50',
  },
  {
    name: 'ConsultFlow',
    image: '/images/consultflow.png',
    description:
      'Everything your consultancy needs. A comprehensive platform to manage clients, projects, and streamline consultancy operations.',
    url: 'https://consult-flow.pages.dev/',
    tag: 'Business Operations',
    color: 'from-blue-500 to-indigo-600',
    bg: 'bg-blue-50',
  },
  {
    name: 'Insurance Tracker',
    image: '/images/insurance_tracker.png',
    description:
      'Never miss your vehicle insurance renewal again. Track documents, get timely reminders, and avoid penalty charges across Nepal.',
    url: 'https://insurancetracker.purplefolder.com.np/',
    tag: 'FinTech · Nepal',
    color: 'from-purple-500 to-violet-600',
    bg: 'bg-purple-50',
  },
]

export default function Products() {
  return (
    <section className="py-24 bg-gray-50" id="products">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <AnimatedDiv className="text-center mb-16">
          <p className="text-purple-600 font-semibold text-sm uppercase tracking-widest mb-3">
            What We've Built
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Our Products
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            We build products that solve real problems. Here are some of our
            flagship projects.
          </p>
        </AnimatedDiv>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((p, i) => (
            <AnimatedDiv key={p.name} delay={i * 100}>
              <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group h-full flex flex-col">
                {/* Image area */}
                <div className={`${p.bg} p-8 flex items-center justify-center min-h-[180px]`}>
                  <img
                    src={p.image}
                    alt={p.name}
                    className="max-h-24 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.target.parentElement.innerHTML = `<div class="text-5xl">${p.name[0]}</div>`
                    }}
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <span
                    className={`inline-flex self-start text-xs font-semibold px-3 py-1 rounded-full bg-gradient-to-r ${p.color} text-white mb-3`}
                  >
                    {p.tag}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {p.name}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-6">
                    {p.description}
                  </p>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 bg-gradient-to-r ${p.color} text-white text-sm font-semibold px-5 py-3 rounded-2xl hover:opacity-90 transition-opacity w-full justify-center`}
                  >
                    Visit Site
                    <i className="fas fa-up-right-from-square text-sm" />
                  </a>
                </div>
              </div>
            </AnimatedDiv>
          ))}
        </div>
      </div>
    </section>
  )
}
