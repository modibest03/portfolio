'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const greetings = ['Hi, my name is', 'Hello, I am', "Greetings, I'm"];
const buildStatements = [
  'scalable web & mobile experiences.',
  'intuitive interfaces & apps.',
  'elegant digital products.',
];

export default function Hero() {
  const [greetingIndex, setGreetingIndex] = useState(0);
  const [statementIndex, setStatementIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentStatement = buildStatements[statementIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayText.length < currentStatement.length) {
      timeout = setTimeout(() => {
        setDisplayText(currentStatement.slice(0, displayText.length + 1));
      }, 50);
    } else if (!isDeleting && displayText.length === currentStatement.length) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 3000);
    } else if (isDeleting && displayText.length > 0) {
      timeout = setTimeout(() => {
        setDisplayText(currentStatement.slice(0, displayText.length - 1));
      }, 30);
    } else if (isDeleting && displayText.length === 0) {
      setIsDeleting(false);
      setStatementIndex((prev) => (prev + 1) % buildStatements.length);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, statementIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setGreetingIndex((prev) => (prev + 1) % greetings.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id='home'
      className='relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:pl-32'
    >
      <div className='max-w-4xl w-full'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.p
            key={greetingIndex}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className='text-accent-400 font-mono text-lg mb-4'
          >
            {greetings[greetingIndex]}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-4'
          >
            <span className='text-[#ccd6f6]'>Abdulmajeed Hussaini</span>
            <br />
            <span className='text-gradient'>Modibbo.</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className='text-lg sm:text-xl md:text-3xl lg:text-4xl font-bold text-[#8892b0] mb-0 h-8 sm:h-10 md:h-12 overflow-hidden'
          >
            <span className='text-[#8892b0] whitespace-nowrap'>I build </span>
            <span className='text-accent-400 whitespace-nowrap'>
              {displayText}
              <span className='animate-pulse'>|</span>
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className='text-lg md:text-xl text-[#8892b0] max-w-2xl mb-12 leading-relaxed'
          >
            I'm a seasoned senior frontend engineer passionate about creating
            immersive digital experiences that address real-world needs. I
            specialize in building accessible, pixel-perfect user interfaces
            that blend thoughtful design with robust engineering.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className='flex flex-wrap gap-4'
          >
            <a
              href='#contact'
              className='px-6 py-3 sm:px-8 sm:py-4 bg-transparent border-2 border-accent-400 text-accent-400 rounded-lg font-semibold text-sm sm:text-base hover:bg-accent-400 hover:text-[#0a0e27] transition-all duration-300 hover:shadow-[0_0_20px_rgba(100,255,218,0.5)] active:scale-95'
            >
              Get In Touch
            </a>
            <a
              href='#experience'
              className='px-6 py-3 sm:px-8 sm:py-4 bg-transparent border-2 border-primary-400 text-primary-400 rounded-lg font-semibold text-sm sm:text-base hover:bg-primary-400 hover:text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] active:scale-95'
            >
              View My Work
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className='absolute bottom-10 left-1/2 -translate-x-1/2 lg:left-32 lg:translate-x-0'
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className='w-6 h-10 border-2 border-accent-400 rounded-full flex justify-center p-2'
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className='w-1 h-3 bg-accent-400 rounded-full'
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
