import { useLocation } from 'react-router-dom'

export default function Footer() {
  const { pathname } = useLocation()
  const p = pathname === '/' ? '' : '/'

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: `${p}#about` },
    { label: 'Our Products', href: `${p}#products` },
    { label: 'Our Skills', href: `${p}#skills` },
    { label: 'Career', href: '/career' },
    { label: 'Get In Touch', href: `${p}#contact` },
  ]

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
              <span className="font-bold text-base">Purple Folder</span>
            </div>
            <p className="text-purple-300 text-sm leading-relaxed mb-6">
              A dedicated software engineering team in Kathmandu, building
              web, backend, and AI-powered products for clients worldwide
              since 2014.
            </p>
            <div className="flex gap-3">
              {[
                { icon: 'fab fa-facebook-f', href: 'https://www.facebook.com/purplefolder/' },
                { icon: 'fab fa-x-twitter', href: 'https://twitter.com/purple_folder' },
                { icon: 'fab fa-linkedin-in', href: 'https://www.linkedin.com/in/purplefolder' },
              ].map(({ icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-white/10 hover:bg-purple-500 rounded-xl flex items-center justify-center text-purple-300 hover:text-white transition-all duration-200"
                >
                  <i className={`${icon} text-sm`} />
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
              {navLinks.map(({ label, href }) => (
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
          </div>
        </div>

        <div className="pt-8 text-center">
          <p className="text-purple-400 text-xs">
            © {new Date().getFullYear()} Purple Folder. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
