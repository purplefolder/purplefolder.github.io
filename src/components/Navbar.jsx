import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2.5">
            <img
              src="/images/purple_logo.png"
              alt="Purple Folder"
              className="h-8 w-auto"
              onError={(e) => { e.target.style.display = 'none' }}
            />
            <span
              className={`font-bold text-base tracking-tight transition-colors duration-300 ${
                scrolled ? 'text-purple-900' : 'text-white'
              }`}
            >
              Purple Folder Services
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors duration-200 hover:text-purple-500 ${
                scrolled ? 'text-gray-600' : 'text-white/80'
              }`}
            >
              Home
            </Link>
            <Link
              to="/career"
              className={`text-sm font-medium transition-colors duration-200 hover:text-purple-500 ${
                scrolled ? 'text-gray-600' : 'text-white/80'
              }`}
            >
              Career
            </Link>
            <a
              href="#contact"
              className="bg-purple-600 text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-purple-700 transition-colors duration-200 shadow-md hover:shadow-purple-200"
            >
              Get In Touch
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-xl transition-colors ${
              scrolled
                ? 'text-gray-700 hover:bg-gray-100'
                : 'text-white hover:bg-white/10'
            }`}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? 'max-h-60 pb-4' : 'max-h-0'
          }`}
        >
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-3 flex flex-col gap-1">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="text-gray-700 font-medium px-4 py-2.5 rounded-xl hover:bg-purple-50 hover:text-purple-700 transition-colors text-sm"
            >
              Home
            </Link>
            <Link
              to="/career"
              onClick={() => setIsOpen(false)}
              className="text-gray-700 font-medium px-4 py-2.5 rounded-xl hover:bg-purple-50 hover:text-purple-700 transition-colors text-sm"
            >
              Career
            </Link>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="bg-purple-600 text-white font-semibold px-4 py-2.5 rounded-xl text-center hover:bg-purple-700 transition-colors text-sm"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
