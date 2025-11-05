'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

interface Job {
  number: number
  title: string
  company: string
  period: string
  location: string
  description: string
  technologies: string[]
}

const jobs: Job[] = [
  {
    number: 1,
    title: 'Senior Mobile Engineer',
    company: 'Mel-Fi Technology Limited',
    period: 'Sep 2023 — Dec 2024',
    location: 'Abuja',
    description: 'I lead the frontend codebase, ensuring it powers cutting-edge features like Airtime to cash conversion and virtual account management. I collaborate closely with teams to transform ideas into seamless user experiences, driving innovation and excellence. My role involves not just management, but also hands-on involvement in design and execution, guaranteeing every line of code contributes to an unparalleled journey. I continuously optimize the codebase for performance and scalability, committed to delivering mobile experiences that exceed expectations.',
    technologies: ['React Native', 'TypeScript', 'JavaScript', 'Mobile Development'],
  },
  {
    number: 2,
    title: 'Senior Frontend Engineer',
    company: 'Bridge Technology',
    period: 'May 2022 — Feb 2023',
    location: 'Bridgetown',
    description: 'Collaborated closely with the Head of Engineering to conceive and bring to fruition decentralized applications (dApps) through effective collaboration with cross-functional teams including back-end developers and product managers. Worked alongside engineering lead to architect the whole front-end infrastructure and development. Setup technical documentation and established Continuous Integration/Continuous Deployment processes.',
    technologies: ['React', 'TypeScript', 'dApps', 'CI/CD', 'Documentation'],
  },
  {
    number: 3,
    title: 'Senior Frontend Engineer',
    company: 'SOAR DIGITAL',
    period: 'Apr 2022 — May 2023',
    location: 'Lagos',
    description: 'Collaborated with cross-functional teams to determine and create user-centric systems, utilized to address various challenge sets. Lead team to bring client ideas to life. Contributed to the design and implementation of a gas analytics, and platform technology solutions as a member of a 5-person collaborative team. Spearheaded troubleshooting efforts, resolved over 100 bugs and technical issues, and optimized React Native code to improve performance and functionality.',
    technologies: ['React Native', 'JavaScript', 'Analytics', 'Performance Optimization'],
  },
  {
    number: 4,
    title: 'Frontend Developer',
    company: 'eSoft Response',
    period: 'Feb 2021 — Oct 2021',
    location: '',
    description: 'Worked with teams to identify and develop User-focused systems, used in solving different problem sets. Using Agile methodology, I have built front-end applications along with other teams such as Product Management, Designers and Testers. Utilizing best practices, I implemented UI designs to production. Effectively coded software changes and alterations based on specific design specifications.',
    technologies: ['React', 'Agile', 'UI/UX', 'JavaScript'],
  },
  {
    number: 5,
    title: 'Front End Developer',
    company: 'Lumilab',
    period: 'Jul 2017 — Dec 2024',
    location: '',
    description: 'Implemented UI designs, working collaboratively to build client softwares. Lead the front-end team in achieving intended goals. Worked in sync with UI designers and back-end developers in creating user-friendly experiences. Set up development and production environments for other team members to collaborate on.',
    technologies: ['JavaScript', 'CSS', 'HTML', 'Team Leadership'],
  },
]

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="experience" ref={ref} className="relative py-20 sm:py-32 px-4 sm:px-6 lg:pl-32">
      <div className="max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2 sm:gap-4 mb-12 sm:mb-16"
        >
          <span className="section-number text-primary-400">02.</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#ccd6f6]">
            Where I've Worked
          </h2>
          <div className="flex-1 h-px bg-[#8892b0] opacity-30 ml-2 sm:ml-4 hidden sm:block" />
        </motion.div>

        <div className="space-y-12">
          {jobs.map((job, index) => (
            <motion.div
              key={job.number}
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative pl-6 sm:pl-8 border-l-2 border-primary-400 border-opacity-30 hover:border-accent-400 transition-colors duration-300"
            >
              <div className="absolute -left-[7px] sm:-left-[9px] top-0 w-3 h-3 sm:w-4 sm:h-4 bg-[#0a0e27] border-2 border-primary-400 rounded-full" />
              
              <div className="mb-4">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <h3 className="text-lg sm:text-xl font-semibold text-[#ccd6f6]">
                    {job.title}
                  </h3>
                  <span className="text-accent-400">@</span>
                  <span className="text-accent-400 font-semibold text-sm sm:text-base">{job.company}</span>
                </div>
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm text-[#8892b0] font-mono">
                  <span>{job.period}</span>
                  {job.location && (
                    <>
                      <span>•</span>
                      <span>{job.location}</span>
                    </>
                  )}
                </div>
              </div>

              <p className="text-sm sm:text-base text-[#8892b0] mb-4 leading-relaxed">{job.description}</p>

              <div className="flex flex-wrap gap-2">
                {job.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-[#1a1f3a] border border-primary-400 border-opacity-30 rounded text-xs font-mono text-[#8892b0] hover:border-accent-400 hover:text-accent-400 transition-all duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
