'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

interface Project {
  title: string
  company: string
  period: string
  description: string
  highlights: string[]
  technologies: string[]
  link?: string
  github?: string
  featured?: boolean
}

const projects: Project[] = [
  {
    title: 'Monzi',
    company: 'Mel-Fi Technology Limited',
    period: 'Sep 2023 — Dec 2024',
    description: 'AI-powered mobile app for instant money transfers. Snap, scan, and send money directly without typing long account numbers. Features location-based suggestions for store bank details and secure, AI-powered transfers.',
    highlights: [
      'AI-powered money transfers with QR code scanning',
      'Location-based bank details suggestions',
      'Secure, instant transfers with fraud prevention',
      'Available on iOS App Store',
    ],
    technologies: ['React Native', 'TypeScript', 'AI/ML', 'iOS', 'Mobile Development'],
    link: 'https://apps.apple.com/ng/app/monzi-snap-to-send-money/id6748400366',
    featured: true,
  },
  {
    title: 'Nyra Wallet',
    company: 'Mel-Fi Technology Limited',
    period: 'Sep 2023 — Dec 2024',
    description: 'Comprehensive financial management app simplifying money transfers, virtual dollar cards, airtime-to-cash conversion, and remittances. Designed to be simple, secure, and social.',
    highlights: [
      'Virtual dollar cards for global shopping',
      'Airtime to cash conversion',
      'Group expense management and shared accounts',
      'CBN-licensed secure transactions',
      'Financial games for engagement',
    ],
    technologies: ['React Native', 'TypeScript', 'Virtual Cards', 'FinTech', 'iOS'],
    link: 'https://apps.apple.com/ng/app/nyra-wallet/id6670797970',
    featured: true,
  },
  {
    title: 'Kita',
    company: 'SOAR DIGITAL',
    period: 'Apr 2022 — May 2023',
    description: 'A robust and technologically advanced platform for liquified hydrocarbon gas production, supply, and distribution, coupled with a distributed power-as-a-service industry in Nigeria.',
    highlights: [
      'Smart monitoring and control systems',
      'Optimized operational workflow',
      'Data-driven insights for energy distribution',
      'Real-time monitoring dashboards',
    ],
    technologies: ['React', 'JavaScript', 'Redux', 'Git', 'HTML/CSS'],
    link: 'https://kita.asikoenergy.com/',
  },
  {
    title: 'HydroCIS',
    company: 'SOAR DIGITAL',
    period: 'Apr 2022 — May 2023',
    description: 'A groundbreaking platform that revolutionizes the energy sector through data-driven insights and cutting-edge technological solutions for energy information, analysis, and decision-making.',
    highlights: [
      'Comprehensive energy data analytics',
      'Interactive data visualizations',
      'Intuitive user interfaces and dashboards',
      'Collaboration hub for energy professionals',
    ],
    technologies: ['React', 'JavaScript', 'Redux', 'Node.js', 'Git'],
    link: 'https://www.hydrocis.com/',
  },
  {
    title: 'Specnota',
    company: 'eSoft Response',
    period: 'Feb 2021 — Oct 2021',
    description: 'A cloud-based collaboration tool that simplifies task management and Functional Specification Document (FSD) generation for teams, enabling real-time collaboration.',
    highlights: [
      'Real-time collaborative editing',
      'Cloud-based document management',
      'Streamlined FSD generation process',
      'Version control and document tracking',
      'Remote work support',
    ],
    technologies: ['React', 'JavaScript', 'Redux', 'Git', 'Cloud', 'HTML/CSS'],
    link: 'https://specnota.com/',
  },
  {
    title: 'TastyAfrica',
    company: 'eSoft Response',
    period: 'Feb 2021 — Oct 2021',
    description: 'A platform pioneering high-quality, affordable, and authentic African cuisine while promoting African culture. Features advanced kitchen automation and personalized dining experiences.',
    highlights: [
      'Kitchen automation systems',
      'Real-time data monitoring',
      'Personalized dining experiences',
      'Customer preference analytics',
      'Cultural preservation platform',
    ],
    technologies: ['React', 'JavaScript', 'Redux', 'Node.js', 'Git', 'HTML/CSS'],
    link: 'https://tastyafricanfood.com/',
  },
  {
    title: 'ConnecMe2',
    company: 'eSoft Response',
    period: 'Feb 2021 — Oct 2021',
    description: 'A cutting-edge, data-driven app empowering the next generation of talent by connecting individuals with vocational opportunities through intelligent matchmaking algorithms.',
    highlights: [
      'Intelligent matchmaking algorithms',
      'Personalized recommendations using ML',
      'Skills and interest-based matching',
      'Transparent vocational network',
      'Data-driven opportunity discovery',
    ],
    technologies: ['React', 'JavaScript', 'Redux', 'Machine Learning', 'Git'],
    link: 'https://connecme2.com/',
  },
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const featuredProjects = projects.filter((p) => p.featured)
  const otherProjects = projects.filter((p) => !p.featured)

  return (
    <section id="projects" ref={ref} className="relative py-20 sm:py-32 px-4 sm:px-6 lg:pl-32">
      <div className="max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2 sm:gap-4 mb-12 sm:mb-16"
        >
          <span className="section-number text-primary-400">03.</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#ccd6f6]">
            Featured Projects
          </h2>
          <div className="flex-1 h-px bg-[#8892b0] opacity-30 ml-2 sm:ml-4 hidden sm:block" />
        </motion.div>

        {/* Featured Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-20">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-400/20 to-accent-400/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative p-6 sm:p-8 bg-[#1a1f3a] border border-primary-400 border-opacity-30 rounded-lg hover:border-accent-400 transition-all duration-300 h-full">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-[#ccd6f6] mb-2 group-hover:text-accent-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm sm:text-base text-accent-400 font-semibold mb-1">{project.company}</p>
                    <p className="text-xs sm:text-sm text-[#8892b0] font-mono">{project.period}</p>
                  </div>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#8892b0] hover:text-accent-400 transition-colors ml-4 text-xl"
                      aria-label={`Visit ${project.title}`}
                      title="Visit project"
                    >
                      ↗
                    </a>
                  )}
                </div>

                <p className="text-sm sm:text-base text-[#8892b0] mb-4 sm:mb-6 leading-relaxed">{project.description}</p>

                <ul className="space-y-2 mb-6">
                  {project.highlights.slice(0, 3).map((highlight, idx) => (
                    <li key={idx} className="text-sm text-[#8892b0] flex items-start">
                      <span className="text-accent-400 mr-2">▸</span>
                      {highlight}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-[#0a0e27] border border-primary-400 border-opacity-30 rounded text-xs font-mono text-[#8892b0] hover:border-accent-400 hover:text-accent-400 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-8"
        >
          <h3 className="text-xl sm:text-2xl font-bold text-[#ccd6f6] mb-6 sm:mb-8">Other Noteworthy Projects</h3>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {otherProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-400/10 to-accent-400/10 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative p-6 bg-[#1a1f3a] border border-primary-400 border-opacity-30 rounded-lg hover:border-accent-400 transition-all duration-300 h-full flex flex-col">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h4 className="text-lg sm:text-xl font-bold text-[#ccd6f6] mb-1 group-hover:text-accent-400 transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-accent-400 font-semibold">{project.company}</p>
                  </div>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#8892b0] hover:text-accent-400 transition-colors text-lg"
                      aria-label={`Visit ${project.title}`}
                      title="Visit project"
                    >
                      ↗
                    </a>
                  )}
                </div>

                <p className="text-sm text-[#8892b0] mb-4 leading-relaxed flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-[#0a0e27] border border-primary-400 border-opacity-30 rounded text-xs font-mono text-[#8892b0]"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-1 text-xs font-mono text-[#8892b0]">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
