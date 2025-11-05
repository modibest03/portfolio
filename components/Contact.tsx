'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'

// Modern SVG Icons
const EmailIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
  >
    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
)

const PhoneIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
  >
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
  </svg>
)

const LinkedInIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)

  const contactMethods = [
    {
      name: 'Email',
      value: 'modibest03@gmail.com',
      href: 'mailto:modibest03@gmail.com',
      icon: EmailIcon,
      gradient: 'from-accent-400 to-primary-400',
    },
    {
      name: 'Phone',
      value: '0811 208 4247',
      href: 'tel:+2348112084247',
      icon: PhoneIcon,
      gradient: 'from-primary-400 to-accent-400',
    },
    {
      name: 'LinkedIn',
      value: 'Connect on LinkedIn',
      href: 'https://linkedin.com',
      icon: LinkedInIcon,
      gradient: 'from-accent-400 to-primary-400',
    },
  ]

  return (
    <section id="contact" ref={ref} className="relative py-16 sm:py-20 px-4 sm:px-6 lg:pl-32 overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-400/10 via-accent-400/5 to-primary-400/10 opacity-50" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.1),transparent_50%)]" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="section-number text-primary-400 block mb-3"
          >
            05.
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#ccd6f6] mb-3 sm:mb-4"
          >
            Let's Build Something
            <br />
            <span className="text-gradient bg-gradient-to-r from-accent-400 to-primary-400 bg-clip-text text-transparent">
              Extraordinary
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-sm sm:text-base md:text-lg text-[#8892b0] max-w-2xl mx-auto leading-relaxed px-4 sm:px-0"
          >
            I'm currently looking for new opportunities, my inbox is always open.
            Whether you have a question or just want to say hi, I'll try my best
            to get back to you!
          </motion.p>
        </motion.div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
          {contactMethods.map((method, index) => {
            const IconComponent = method.icon
            return (
              <motion.a
                key={method.name}
                href={method.href}
                target={method.href.startsWith('http') ? '_blank' : undefined}
                rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                onHoverStart={() => setHoveredLink(method.name)}
                onHoverEnd={() => setHoveredLink(null)}
                className="group relative"
              >
                {/* Glow effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${method.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
                />
                
                <div className="relative p-6 bg-[#1a1f3a] border border-primary-400 border-opacity-30 rounded-2xl hover:border-accent-400 transition-all duration-300 h-full backdrop-blur-sm">
                  <div className="flex flex-col items-center text-center">
                    <motion.div
                      animate={hoveredLink === method.name ? { rotate: 360, scale: 1.2 } : { rotate: 0, scale: 1 }}
                      transition={{ duration: 0.5 }}
                      className="text-accent-400 mb-3 group-hover:text-primary-400 transition-colors"
                    >
                      <IconComponent className="w-10 h-10" />
                    </motion.div>
                    <h3 className="text-lg font-bold text-[#ccd6f6] mb-1 group-hover:text-accent-400 transition-colors">
                      {method.name}
                    </h3>
                    <p className="text-xs text-[#8892b0] font-mono group-hover:text-accent-400 transition-colors">
                      {method.value}
                    </p>
                  </div>

                  {/* Arrow indicator */}
                  <motion.div
                    animate={hoveredLink === method.name ? { x: 5, opacity: 1 } : { x: 0, opacity: 0.5 }}
                    className="absolute top-4 right-4 text-accent-400 text-xl"
                  >
                    ↗
                  </motion.div>
                </div>
              </motion.a>
            )
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <div className="inline-flex flex-col items-center gap-4 p-6 bg-[#1a1f3a] border border-accent-400 border-opacity-20 rounded-2xl backdrop-blur-sm">
            <p className="text-[#8892b0] font-mono text-xs">Ready to start a conversation?</p>
            <motion.a
              href="mailto:modibest03@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-6 sm:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-accent-400 to-primary-400 text-[#0a0e27] rounded-lg font-bold text-sm sm:text-base overflow-hidden active:scale-95"
            >
              <span className="relative z-10">Say Hello</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary-400 to-accent-400 opacity-0 group-hover:opacity-100 transition-opacity"
                initial={false}
              />
            </motion.a>
          </div>
        </motion.div>

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-accent-400/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-primary-400/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
      </div>
    </section>
  )
}