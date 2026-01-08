'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useAppContext } from '@/contexts/AppContext'

const sections = [
  { id: 'cover', title: 'Cover', pageNumber: '01' },
  { id: 'intro', title: 'Intro', pageNumber: '02' },
  { id: 'the-intro', title: 'The Intro', pageNumber: '03' },
  { id: 'details', title: 'Details & Mood', pageNumber: '04' },
  { id: 'the-mood', title: 'The Mood', pageNumber: '05' },
  { id: 'outro', title: 'Outro', pageNumber: '06' },
]

interface TOCDrawerProps {
  onNavigate: (id: string) => void
}

export function TOCDrawer({ onNavigate }: TOCDrawerProps) {
  const { tocOpen, setTocOpen, currentPage } = useAppContext()

  return (
    <AnimatePresence>
      {tocOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setTocOpen(false)}
            className="fixed inset-0 z-[200] bg-[#1A1A1A]/50"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed bottom-0 left-0 top-0 z-[201] w-72 bg-[#D9CBB8] p-8 shadow-xl"
          >
            <div className="flex items-center justify-between">
              <h2 className="font-heading text-2xl text-[#1A1A1A]">Contents</h2>
              <button
                onClick={() => setTocOpen(false)}
                className="text-[#1A1A1A] hover:text-[#A63A30]"
                aria-label="Close menu"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="editorial-rule my-6" />

            <nav>
              <ul className="space-y-4">
                {sections.map((section, index) => (
                  <li key={section.id}>
                    <button
                      onClick={() => {
                        onNavigate(section.id)
                        setTocOpen(false)
                      }}
                      className={`flex w-full items-center gap-4 py-2 text-left transition-colors hover:text-[#A63A30] ${
                        currentPage === index ? 'text-[#A63A30]' : 'text-[#1A1A1A]'
                      }`}
                    >
                      <span className="font-heading text-sm opacity-60">{section.pageNumber}</span>
                      <span className="text-caption">{section.title}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="editorial-rule my-6" />

            <p className="font-heading text-xs italic text-[#1A1A1A]/60">
              Captured moments of my Darling.
            </p>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
