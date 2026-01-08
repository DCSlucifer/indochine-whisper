'use client'

import { motion } from 'framer-motion'

const sections = [
  { id: 'cover', title: 'Cover' },
  { id: 'intro', title: 'Intro' },
  { id: 'the-intro', title: 'The Intro' },
  { id: 'details', title: 'Details' },
  { id: 'the-mood', title: 'The Mood' },
  { id: 'outro', title: 'Outro' },
]

interface ProgressRailProps {
  currentPage: number
}

export function ProgressRail({ currentPage }: ProgressRailProps) {
  const pageNumber = String(currentPage + 1).padStart(2, '0')
  const currentSection = sections[currentPage]

  return (
    <div className="fixed bottom-8 left-8 top-24 z-[50] hidden w-8 flex-col items-center lg:flex">
      {/* Progress line container */}
      <div className="relative h-32 w-px bg-[#1A1A1A]/20">
        <motion.div
          className="absolute left-0 top-0 w-full bg-[#A63A30]"
          initial={{ height: '0%' }}
          animate={{ height: `${((currentPage + 1) / sections.length) * 100}%` }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        />
      </div>

      {/* Page number */}
      <motion.div
        key={currentPage}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-4 font-heading text-xl text-[#A63A30]"
      >
        {pageNumber}
      </motion.div>

      {/* Section title (vertical) */}
      <motion.div
        key={currentSection?.id}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mt-4 origin-center rotate-180 text-caption text-[#1A1A1A]/60"
        style={{ writingMode: 'vertical-rl' }}
      >
        {currentSection?.title}
      </motion.div>
    </div>
  )
}
