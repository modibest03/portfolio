'use client'

export default function Footer() {
  return (
    <footer className="relative py-6 sm:py-8 px-4 sm:px-6 lg:pl-32 border-t border-primary-400 border-opacity-20">
      <div className="max-w-4xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#8892b0]">
          <p className="font-mono">
            Built with Next.js, Tailwind CSS & Framer Motion
          </p>
          <p className="font-mono">
            © {new Date().getFullYear()} Abdulmajeed Hussaini Modibbo
          </p>
        </div>
      </div>
    </footer>
  )
}