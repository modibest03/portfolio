'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

interface EducationItem {
  icon: string
  degree: string
  school: string
  period: string
  location: string
}

const educationItems: EducationItem[] = [
  {
    icon: '🎓',
    degree: 'BSC Computer Science',
    school: 'Alqalam University',
    period: 'Jan 2017 — Jul 2021',
    location: 'Kastina',
  },
  {
    icon: '🇳🇬',
    degree: 'NYSC',
    school: 'National Youth Service CORPS',
    period: 'Oct 2021 — Oct 2022',
    location: 'Katsina',
  },
  {
    icon: '📚',
    degree: 'WAEC',
    school: 'Fatimatu Al-zahrau Model Science and Arabic School',
    period: 'Jul 2016',
    location: 'Kefii, Nasarawa',
  },
]

export default function Education() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="education" ref={ref} className="relative py-20 sm:py-32 px-4 sm:px-6 lg:pl-32">
      <div className="max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2 sm:gap-4 mb-12 sm:mb-16"
        >
          <span className="section-number text-primary-400">04.</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#ccd6f6]">
            Education
          </h2>
          <div className="flex-1 h-px bg-[#8892b0] opacity-30 ml-2 sm:ml-4 hidden sm:block" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {educationItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="p-5 sm:p-6 bg-[#1a1f3a] border border-primary-400 border-opacity-30 rounded-lg hover:border-accent-400 transition-all duration-300 group"
            >
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{item.icon}</div>
              <h3 className="text-lg sm:text-xl font-semibold text-[#ccd6f6] mb-2 group-hover:text-accent-400 transition-colors">
                {item.degree}
              </h3>
              <p className="text-sm sm:text-base text-accent-400 font-semibold mb-2">{item.school}</p>
              <p className="text-xs sm:text-sm text-[#8892b0] font-mono mb-1">{item.period}</p>
              <p className="text-xs sm:text-sm text-[#8892b0]">{item.location}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}