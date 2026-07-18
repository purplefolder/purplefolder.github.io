import { Facebook, Twitter, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#0f0720] via-[#2d1060] to-[#4c1d95] text-white pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 pb-12 border-b border-white/10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <img
                src="/images/purple_logo.png"
                alt="Purple Folder"
                className="h-8 w-auto"
                onError={(e) => { e.target.style.display = 'none' }}
              />
              <span className="font-bold text-base">Purple Folder Services</span>
            </div>
            <p className="text-purple-300 text-sm leading-relaxed mb-6">
              Quality and timely delivery is our goal. Outsource with
              confidence to our expert team in Kathmandu, Nepal.
            </p>
            <div className="flex gap-3">
              {[
                { Icon: Facebook, href: 'https://www.facebook.com/purplefolder/' },
                { Icon: Twitter, href: 'https://twitter.com/purple_folder' },
                { Icon: Linkedin, href: 'https://www.linkedin.com/in/purplefolder' },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-white/10 hover:bg-purple-500 rounded-xl flex items-center justify-center text-purple-300 hover:text-white transition-all duration-200"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-semibold text-sm text-white mb-4 uppercase tracking-widest">
              Navigation
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Home', href: '/' },
                { label: 'About Us', href: '#about' },
                { label: 'Our Products', href: '#products' },
                { label: 'Our Skills', href: '#skills' },
                { label: 'Career', href: '/career' },
                { label: 'Get In Touch', href: '#contact' },
              ].map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-purple-300 hover:text-white text-sm transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-sm text-white mb-4 uppercase tracking-widest">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:info@purplefolder.com.np"
                  className="text-purple-300 hover:text-white text-sm transition-colors"
                >
                  info@purplefolder.com.np
                </a>
              </li>
              <li className="text-purple-300 text-sm">Kathmandu, Nepal</li>
            </ul>

            <div className="mt-8">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white text-sm font-semibold px-5 py-2.5 rounded-2xl transition-all duration-200"
              >
                Fill Your Resource
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 text-center">
          <p className="text-purple-400 text-xs">
            © {new Date().getFullYear()} Purple Folder Services Nepal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
