import { useScrollAnimation } from '../hooks/useScrollAnimation'

const skillGroups = [
  {
    title: 'Frontend',
    icon: 'fa-laptop-code',
    chipClass: 'bg-blue-100 text-blue-700 border-blue-200',
    headerClass: 'text-blue-600 bg-blue-50',
    skills: ['HTML / CSS', 'JavaScript', 'Web Applications', 'React'],
  },
  {
    title: 'Backend',
    icon: 'fa-server',
    chipClass: 'bg-emerald-100 text-emerald-700 border-emerald-200',
    headerClass: 'text-emerald-600 bg-emerald-50',
    skills: ['Node.js', 'Django', 'Flask', 'Software Engineering'],
  },
  {
    title: 'Cloud & DevOps',
    icon: 'fa-cloud',
    chipClass: 'bg-sky-100 text-sky-700 border-sky-200',
    headerClass: 'text-sky-600 bg-sky-50',
    skills: [
      'Amazon Services',
      'Google Cloud Services',
      'Docker',
      'Airflow',
      'Continuous Integration',
      'Release Engineering',
      'Source Code Management',
    ],
  },
  {
    title: 'Databases',
    icon: 'fa-database',
    chipClass: 'bg-orange-100 text-orange-700 border-orange-200',
    headerClass: 'text-orange-600 bg-orange-50',
    skills: ['MongoDB', 'MySQL', 'Redis', 'PostgreSQL'],
  },
  {
    title: 'Data Science',
    icon: 'fa-chart-bar',
    chipClass: 'bg-violet-100 text-violet-700 border-violet-200',
    headerClass: 'text-violet-600 bg-violet-50',
    skills: ['Pandas', 'NumPy', 'Data Science'],
  },
  {
    title: 'Automation',
    icon: 'fa-robot',
    chipClass: 'bg-rose-100 text-rose-700 border-rose-200',
    headerClass: 'text-rose-600 bg-rose-50',
    skills: ['Scrapy', 'BeautifulSoup', 'Scrapinghub', 'Selenium Automation'],
  },
]

function SkillCard({ group, delay }) {
  const [ref, isVisible] = useScrollAnimation()
  return (
    <div
      ref={ref}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
      }}
    >
      <div className="bg-white rounded-3xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-shadow h-full">
        <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-2xl text-base font-semibold mb-4 ${group.headerClass}`}>
          <i className={`fas ${group.icon} text-base`} />
          <span>{group.title}</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {group.skills.map((skill) => (
            <span
              key={skill}
              className={`text-xs font-medium px-3 py-1.5 rounded-full border ${group.chipClass}`}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Skills() {
  const [headerRef, headerVisible] = useScrollAnimation()

  return (
    <section className="py-24 bg-white" id="skills">
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
            Technology Stack
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Our Wide Skill Sets
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            From frontend to backend, cloud to data science — we cover the full
            modern tech stack.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, i) => (
            <SkillCard key={group.title} group={group} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  )
}
