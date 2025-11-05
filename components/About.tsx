'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" ref={ref} className="relative py-20 sm:py-32 px-4 sm:px-6 lg:pl-32">
      <div className="max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2 sm:gap-4 mb-6 sm:mb-8"
        >
          <span className="section-number text-primary-400">01.</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#ccd6f6]">
            About Me
          </h2>
          <div className="flex-1 h-px bg-[#8892b0] opacity-30 ml-2 sm:ml-4 hidden sm:block" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-4 sm:space-y-6 text-base sm:text-lg text-[#8892b0] leading-relaxed"
        >
          <p>
            I'm a seasoned senior frontend engineer passionate about creating immersive digital
            experiences that address real-world needs. My work ethic is rooted in precision, crafting
            user-centric solutions prioritizing accessibility and efficiency.
          </p>
          <p>
            Whether leading solo or collaborating, I pursue excellence, staying ahead of industry trends
            through continuous learning. With a focus on both individual and team excellence, I'm ready
            to drive your next digital breakthrough.
          </p>
          <p>
            My favorite work lies at the intersection of design and development, creating experiences
            that not only look great but are meticulously built for performance and usability.
          </p>
          <p className="text-accent-400 font-semibold">
            Let's craft something extraordinary together.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 sm:mt-12 grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4"
        >
          {['JavaScript', 'TypeScript', 'React', 'Next.js', 'React Native', 'Node.js'].map(
            (tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                className="px-4 py-2 bg-[#1a1f3a] border border-primary-400 border-opacity-30 rounded-lg text-center font-mono text-sm hover:border-accent-400 hover:text-accent-400 transition-all duration-300 text-[#8892b0]"
              >
                {tech}
              </motion.div>
            )
          )}
        </motion.div>
      </div>
    </section>
  )
}
