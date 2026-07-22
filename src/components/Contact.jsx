import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function Contact() {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <section className="py-24 bg-gray-50" id="contact">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div
          ref={ref}
          className="text-center mb-16"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.7s ease, transform 0.7s ease',
          }}
        >
          <p className="text-purple-600 font-semibold text-sm uppercase tracking-widest mb-3">
            Let&apos;s Talk
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-500 text-lg max-w-md mx-auto">
            We are here to bring your ideas to life. We are listening&hellip;
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Contact card */}
          <ContactItem isVisible={isVisible} delay={100}>
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm h-full">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Reach Us
              </h3>
              <div className="space-y-5">
                <a
                  href="mailto:info@purplefolder.com.np"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-11 h-11 bg-purple-100 rounded-2xl flex items-center justify-center group-hover:bg-purple-600 transition-colors flex-shrink-0">
                    <i className="fas fa-envelope text-lg text-purple-600 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 font-medium mb-0.5">
                      Email
                    </div>
                    <div className="text-gray-800 font-medium text-sm group-hover:text-purple-600 transition-colors">
                      info@purplefolder.com.np
                    </div>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 bg-purple-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-location-dot text-lg text-purple-600" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 font-medium mb-0.5">
                      Location
                    </div>
                    <div className="text-gray-800 font-medium text-sm">
                      Kathmandu, Nepal
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100">
                <div className="text-xs text-gray-400 font-medium mb-4">
                  Follow Us
                </div>
                <div className="flex gap-3">
                  {[
                    { icon: 'fab fa-facebook-f', href: 'https://www.facebook.com/purplefolder/', label: 'Facebook' },
                    { icon: 'fab fa-x-twitter', href: 'https://twitter.com/purple_folder', label: 'Twitter' },
                    { icon: 'fab fa-linkedin-in', href: 'https://www.linkedin.com/in/purplefolder', label: 'LinkedIn' },
                  ].map(({ icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="w-10 h-10 bg-gray-100 hover:bg-purple-600 rounded-2xl flex items-center justify-center text-gray-600 hover:text-white transition-all duration-200"
                    >
                      <i className={`${icon} text-base`} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </ContactItem>

          {/* CTA card */}
          <ContactItem isVisible={isVisible} delay={200}>
            <div className="bg-gradient-to-br from-[#0f0720] via-[#2d1060] to-[#4c1d95] rounded-3xl p-8 text-white h-full flex flex-col justify-between relative overflow-hidden">
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage:
                    'radial-gradient(circle, #a78bfa 1px, transparent 1px)',
                  backgroundSize: '30px 30px',
                }}
              />
              <div className="relative z-10">
                <div className="text-4xl mb-6">🚀</div>
                <h3 className="text-2xl font-black mb-3">
                  Let&apos;s build something.
                </h3>
                <p className="text-purple-300 text-sm leading-relaxed mb-8">
                  Tell us what you&apos;re building. We&apos;ll bring a
                  dedicated engineering team to make it happen — from a
                  single feature to a full product.
                </p>
              </div>
              <div className="relative z-10 space-y-3">
                <a
                  href="https://calendly.com/purple-folder/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-white text-purple-900 font-bold text-sm px-6 py-3.5 rounded-2xl text-center hover:bg-purple-50 transition-colors"
                >
                  Book a Call
                </a>
                <a
                  href="mailto:info@purplefolder.com.np"
                  className="block bg-white/10 border border-white/20 text-white font-semibold text-sm px-6 py-3.5 rounded-2xl text-center hover:bg-white/20 transition-colors"
                >
                  Send Us an Email
                </a>
              </div>
            </div>
          </ContactItem>
        </div>
      </div>
    </section>
  )
}

function ContactItem({ children, isVisible, delay }) {
  return (
    <div
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
