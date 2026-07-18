import { Link } from 'react-router-dom'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { CheckCircle, Clock, Home, MessageSquare, BookOpen, Gift, Banknote, Users, Mail } from 'lucide-react'

const requirements = [
  'Basic knowledge of Python (at least one project completed)',
  'Basic knowledge of Linux systems — comfortable using Ubuntu',
  'Honest, hardworking, and eager to learn',
  'Fourth-year students are also welcome to apply',
  'Commitment to work for at least one year',
]

const jobDetails = [
  { Icon: Clock, text: 'Work only 4 hours a day — flexible timing (morning, evening, or daytime)' },
  { Icon: Home, text: 'Fully remote — work from home' },
  { Icon: MessageSquare, text: 'Communicate regularly through Slack' },
  { Icon: CheckCircle, text: 'Weekend work expected; leave granted for urgent personal matters' },
]

const benefits = [
  { Icon: BookOpen, text: 'Learn many technologies across real client projects' },
  { Icon: CheckCircle, text: 'Leaves on exam time and other important events' },
  { Icon: Banknote, text: 'Monthly salary + percentage of project income' },
  { Icon: Users, text: 'Supportive team environment — learn from others where you\'re weak' },
]

function AnimatedDiv({ children, delay = 0, className = '' }) {
  const [ref, isVisible] = useScrollAnimation()
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}

function ListSection({ title, emoji, items, isIconList = false }) {
  return (
    <div>
      <h3 className="text-base font-bold text-gray-900 mb-4 flex items-center gap-2">
        <span className="text-lg">{emoji}</span>
        {title}
      </h3>
      <ul className="space-y-3">
        {items.map((item, i) => {
          if (isIconList) {
            const { Icon, text } = item
            return (
              <li key={i} className="flex items-start gap-3">
                <div className="w-7 h-7 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Icon size={14} className="text-purple-600" />
                </div>
                <span className="text-gray-600 text-sm leading-relaxed">{text}</span>
              </li>
            )
          }
          return (
            <li key={i} className="flex items-start gap-3">
              <CheckCircle size={16} className="text-purple-500 flex-shrink-0 mt-0.5" />
              <span className="text-gray-600 text-sm leading-relaxed">{item}</span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default function CareerPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Mini Hero */}
      <section className="relative pt-28 pb-24 overflow-hidden bg-gradient-to-br from-[#0f0720] via-[#2d1060] to-[#4c1d95]">
        <div className="absolute top-1/3 -left-10 w-64 h-64 bg-purple-600 rounded-full filter blur-3xl opacity-20 animate-pulse" />
        <div
          className="absolute bottom-1/3 -right-10 w-72 h-72 bg-indigo-500 rounded-full filter blur-3xl opacity-15 animate-pulse"
          style={{ animationDelay: '2s' }}
        />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle, #a78bfa 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-green-400/20 backdrop-blur-sm text-green-300 text-sm font-semibold px-4 py-2 rounded-full mb-6 border border-green-400/30">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            We&apos;re Hiring
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-4 leading-tight">
            Join the{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300">
              Purple Folder
            </span>{' '}
            Team
          </h1>

          <p className="text-purple-200 text-lg max-w-xl mx-auto">
            We work and learn together. If you have passion for building real things, we want to hear from you.
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
          <svg viewBox="0 0 1440 60" fill="none" className="w-full" preserveAspectRatio="none">
            <path
              d="M0 60L60 51C120 42 240 24 360 18C480 12 600 18 720 24C840 30 960 36 1080 39C1200 42 1320 42 1380 42L1440 42V60H0Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* Job listing */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">

          {/* Open position header */}
          <AnimatedDiv className="mb-8">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-purple-100 text-purple-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                Currently Open
              </span>
              <span className="bg-gray-100 text-gray-500 text-xs font-medium px-3 py-1 rounded-full">
                Part-time · Remote
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-2">
              Junior Python Developer
            </h2>
            <p className="text-gray-500 text-base">
              Looking for someone with passion for learning and a drive to grow through real projects.
            </p>
          </AnimatedDiv>

          {/* Main card */}
          <AnimatedDiv delay={100}>
            <div className="bg-white rounded-3xl border border-gray-100 shadow-sm divide-y divide-gray-100">

              {/* Requirements */}
              <div className="p-6 sm:p-8">
                <ListSection
                  title="We Expect"
                  emoji="🎯"
                  items={requirements}
                />
              </div>

              {/* Job details */}
              <div className="p-6 sm:p-8">
                <ListSection
                  title="Job Description"
                  emoji="💼"
                  items={jobDetails}
                  isIconList
                />
              </div>

              {/* Benefits */}
              <div className="p-6 sm:p-8">
                <ListSection
                  title="Benefits"
                  emoji="🎁"
                  items={benefits}
                  isIconList
                />
              </div>

              {/* CTA */}
              <div className="p-6 sm:p-8 bg-gray-50 rounded-b-3xl">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <div className="text-gray-900 font-bold mb-1">Interested? Drop us a message.</div>
                    <div className="text-gray-500 text-sm">
                      Send your intro and any projects you&apos;ve worked on.
                    </div>
                  </div>
                  <a
                    href="mailto:info@purplefolder.com.np"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold text-sm px-6 py-3.5 rounded-2xl hover:opacity-90 transition-opacity whitespace-nowrap flex-shrink-0"
                  >
                    <Mail size={16} />
                    Apply Now
                  </a>
                </div>
                <div className="mt-4 flex items-center gap-2 text-sm text-gray-400">
                  <Mail size={13} />
                  info@purplefolder.com.np
                </div>
              </div>
            </div>
          </AnimatedDiv>

          {/* Back link */}
          <AnimatedDiv delay={200} className="mt-8 text-center">
            <Link
              to="/"
              className="text-purple-600 hover:text-purple-800 text-sm font-medium transition-colors"
            >
              ← Back to Purple Folder Services
            </Link>
          </AnimatedDiv>
        </div>
      </section>

      <Footer />
    </div>
  )
}
