'use client'

import { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface LookbookSectionProps {
  id: string
  children: ReactNode
  className?: string
  background?: 'cream' | 'paper' | 'dark'
  pageNumber?: string
}

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.8, ease: [0, 0, 0.2, 1] },
}

export function LookbookSection({
  id,
  children,
  className = '',
  background = 'cream',
  pageNumber,
}: LookbookSectionProps) {
  const bgClass = {
    cream: 'bg-[#D9CBB8]',
    paper: 'bg-[#F5F0E8]',
    dark: 'bg-[#1A1A1A]',
  }[background]

  const textClass = background === 'dark' ? 'text-[#D9CBB8]' : 'text-[#1A1A1A]'

  return (
    <section
      id={id}
      className={`snap-section relative flex min-h-screen items-center justify-center ${bgClass} ${textClass} ${className}`}
    >
      <motion.div {...fadeInUp} className="w-full">
        {children}
      </motion.div>

      {/* Page number in corner */}
      {pageNumber && (
        <div className="absolute bottom-8 right-8 font-heading text-sm opacity-40">
          {pageNumber} / 06
        </div>
      )}
    </section>
  )
}
