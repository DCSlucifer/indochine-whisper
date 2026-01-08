'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { LayoutShell } from '@/components/layout/LayoutShell'

export default function HomePage() {
  return (
    <LayoutShell transparentNav>
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#D9CBB8]">
        {/* Louver shadow overlay */}
        <div
          className="pointer-events-none absolute inset-0 z-10 opacity-20 mix-blend-multiply"
          style={{
            background: `repeating-linear-gradient(
              0deg,
              transparent,
              transparent 25px,
              rgba(26, 26, 26, 0.08) 25px,
              rgba(26, 26, 26, 0.08) 50px
            )`,
          }}
        />

        {/* Hero Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/lookbook/01-cover.jpg"
            alt="Indochine Whisper - Cover"
            fill
            priority
            className="object-cover object-center opacity-40"
            sizes="100vw"
          />
        </div>

        {/* Content */}
        <div className="relative z-20 mx-auto max-w-4xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0, 0, 0.2, 1] }}
          >
            <h1 className="font-heading text-5xl font-light tracking-tight text-[#1A1A1A] sm:text-7xl lg:text-[6rem]">
              INDOCHINE WHISPER
            </h1>

            <div className="editorial-rule mx-auto my-8 w-24" />

            <p className="font-heading text-lg italic text-[#1A1A1A]/80 sm:text-xl lg:text-2xl">
              DÁNG XƯA — một thoáng hoài niệm
            </p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mt-12"
            >
              <Link
                href="/lookbook"
                className="group inline-flex items-center gap-3 border border-[#A63A30] px-8 py-4 text-caption text-[#A63A30] transition-all hover:bg-[#A63A30] hover:text-[#D9CBB8]"
              >
                <span>Enter Lookbook</span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="transition-transform group-hover:translate-x-1"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
              className="flex flex-col items-center gap-2 text-[#1A1A1A]/50"
            >
              <span className="text-caption text-xs">Scroll</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 5v14M5 12l7 7 7-7" />
              </svg>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </LayoutShell>
  )
}
