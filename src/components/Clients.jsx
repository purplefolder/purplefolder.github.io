import { useScrollAnimation } from '../hooks/useScrollAnimation'

const clients = [
  { name: 'Property Data Engine', country: 'UK' },
  { name: 'Premier Insurance Co.', country: 'Nepal' },
  { name: '3d Stories Game Studios', country: '' },
  { name: 'TechAxis', country: 'Lalitpur, Nepal' },
  { name: 'TechGravity', country: 'US' },
  { name: 'Digi Solutions', country: 'Australia' },
  { name: 'Optimal Living Daily LLC', country: 'US' },
  { name: 'QBMetrics', country: 'New York' },
  { name: 'Funky Squid Games', country: 'Australia' },
]

export default function Clients() {
  const [headerRef, headerVisible] = useScrollAnimation()
  const marqueeItems = [...clients, ...clients]

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div
          ref={headerRef}
          className="text-center mb-16"
          style={{
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.7s ease, transform 0.7s ease',
          }}
        >
          <p className="text-purple-600 font-semibold text-sm uppercase tracking-widest mb-3">
            Our Track Record
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-4">
            We Have Worked For
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Various companies and individuals we have worked with over the years,
            scattered all over the world.
          </p>
        </div>

        {/* Marquee */}
        <div className="relative overflow-hidden rounded-3xl bg-white border border-gray-100 shadow-sm py-6">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <div className="flex animate-marquee whitespace-nowrap">
            {marqueeItems.map((client, i) => (
              <div
                key={i}
                className="inline-flex items-center gap-2 mx-6 flex-shrink-0"
              >
                <div className="w-2 h-2 bg-purple-400 rounded-full" />
                <span className="text-gray-800 font-semibold text-sm">
                  {client.name}
                </span>
                {client.country && (
                  <span className="text-gray-400 text-xs bg-gray-100 px-2 py-0.5 rounded-full">
                    {client.country}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Grid view */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-8">
          {clients.map((client, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-4 text-center border border-gray-100 shadow-sm hover:shadow-md hover:border-purple-100 transition-all duration-200 hover:-translate-y-0.5"
            >
              <div className="text-gray-900 font-semibold text-sm mb-1">
                {client.name}
              </div>
              {client.country && (
                <div className="text-gray-400 text-xs">{client.country}</div>
              )}
            </div>
          ))}
          <div className="bg-gradient-to-br from-purple-600 to-indigo-600 rounded-2xl p-4 text-center border border-purple-500 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5">
            <div className="text-white font-semibold text-sm mb-1">You?</div>
            <div className="text-purple-200 text-xs">Let&apos;s connect!</div>
          </div>
        </div>
      </div>
    </section>
  )
}
