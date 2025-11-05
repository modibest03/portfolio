import type { Metadata } from 'next'
import { Inter, Fira_Code } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const firaCode = Fira_Code({ 
  subsets: ['latin'],
  variable: '--font-mono',
})

export const metadata: Metadata = {
  title: 'Abdulmajeed Hussaini Modibbo | Software Engineer',
  description: 'Senior Frontend Engineer passionate about creating immersive digital experiences that address real-world needs.',
  keywords: ['Software Engineer', 'Frontend Developer', 'React', 'Next.js', 'Portfolio'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${firaCode.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  )
}