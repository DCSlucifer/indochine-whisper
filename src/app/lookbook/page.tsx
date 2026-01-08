'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useAppContext } from '@/contexts/AppContext'
import { GrainOverlay } from '@/components/overlays/GrainOverlay'
import { TOCDrawer } from '@/components/navigation/TOCDrawer'
import { ProgressRail } from '@/components/ui/ProgressRail'
import { GrainToggle, ReadingModeToggle } from '@/components/ui/Toggles'
import { ScrollSnapContainer, scrollToSectionById } from '@/components/lookbook/ScrollSnapContainer'
import { LookbookSection } from '@/components/lookbook/LookbookSection'

const sectionIds = ['cover', 'intro', 'the-intro', 'details', 'the-mood', 'outro']

const colorPalette = [
  { name: 'Terracotta', hex: '#A63A30' },
  { name: 'Cream', hex: '#D9CBB8' },
  { name: 'Ink', hex: '#1A1A1A' },
  { name: 'Muted Green', hex: '#4A5D44' },
]

const keywords = [
  'Vintage',
  'Indochine',
  'Old Saigon',
  'Muse',
  'Nostalgia',
  'Cinematic',
  'Film Grain',
  'French Colonial',
]

export default function LookbookPage() {
  const { currentPage, setTocOpen } = useAppContext()

  return (
    <>
      {/* Fixed Header with Controls */}
      <header className="fixed left-0 right-0 top-0 z-[100] bg-[#D9CBB8]/90 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setTocOpen(true)}
              className="flex items-center gap-2 text-caption text-[#1A1A1A] hover:text-[#A63A30]"
              aria-label="Open table of contents"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <span className="hidden sm:inline">Contents</span>
            </button>
          </div>

          <Link href="/" className="font-heading text-xl tracking-wide text-[#1A1A1A]">
            THE MUSE
          </Link>

          <div className="flex items-center gap-4">
            <GrainToggle />
            <ReadingModeToggle />
          </div>
        </div>
      </header>

      {/* TOC Drawer */}
      <TOCDrawer onNavigate={scrollToSectionById} />

      {/* Progress Rail */}
      <ProgressRail currentPage={currentPage} />

      {/* Main Scroll Container */}
      <ScrollSnapContainer sectionIds={sectionIds}>
        {/* Page 01 - Cover */}
        <LookbookSection id="cover" pageNumber="01" background="cream">
          <div className="relative flex min-h-screen items-center justify-center px-6 pt-20">
            {/* Louver overlay */}
            <div
              className="pointer-events-none absolute inset-0 opacity-15 mix-blend-multiply"
              style={{
                background: `repeating-linear-gradient(0deg, transparent, transparent 30px, rgba(26,26,26,0.1) 30px, rgba(26,26,26,0.1) 60px)`,
              }}
            />

            <div className="relative z-10 mx-auto max-w-5xl text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="mb-12 overflow-hidden"
              >
                <Image
                  src="/images/lookbook/01-cover.jpg"
                  alt="Cover - Staircase with lilies"
                  width={600}
                  height={800}
                  priority
                  className="mx-auto max-h-[60vh] w-auto object-contain shadow-2xl"
                  sizes="(max-width: 768px) 90vw, 600px"
                />
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="font-heading text-4xl font-light tracking-tight sm:text-6xl lg:text-7xl"
              >
                THE MUSE
              </motion.h1>

              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="editorial-rule mx-auto my-6 w-20"
              />

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="font-heading text-lg italic opacity-80 sm:text-xl"
              >
                Captured moments of my Darling.
              </motion.p>
            </div>
          </div>
        </LookbookSection>

        {/* Page 02 - Intro */}
        <LookbookSection id="intro" pageNumber="02" background="paper">
          <div className="flex min-h-screen items-center justify-center px-6 py-24">
            <div className="mx-auto max-w-3xl text-center">
              <motion.blockquote
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-heading text-2xl italic leading-relaxed sm:text-3xl lg:text-4xl"
              >
                &ldquo;Nét duyên thầm bên khung cửa cũ…&rdquo;
              </motion.blockquote>

              <div className="editorial-rule mx-auto my-10 w-16" />

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex flex-wrap justify-center gap-x-4 gap-y-2"
              >
                {keywords.map((keyword, i) => (
                  <span key={keyword} className="text-caption text-[#1A1A1A]/70">
                    {keyword}
                    {i < keywords.length - 1 && <span className="ml-4">·</span>}
                  </span>
                ))}
              </motion.div>

              <div className="editorial-rule mx-auto my-10 w-16" />

              {/* Color Palette */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex flex-wrap justify-center gap-6"
              >
                {colorPalette.map((color) => (
                  <div key={color.hex} className="flex flex-col items-center gap-2">
                    <div
                      className="h-16 w-16 rounded-sm shadow-md"
                      style={{ backgroundColor: color.hex }}
                    />
                    <span className="text-caption text-xs">{color.name}</span>
                    <span className="font-mono text-xs opacity-60">{color.hex}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </LookbookSection>

        {/* Page 03 - The Intro */}
        <LookbookSection id="the-intro" pageNumber="03" background="cream">
          <div className="flex min-h-screen items-center justify-center px-6 py-24 lg:px-24">
            <div className="grid w-full max-w-6xl items-center gap-12 lg:grid-cols-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-8"
              >
                <Image
                  src="/images/lookbook/02-intro.jpg"
                  alt="The Intro - Fan with louvers"
                  width={900}
                  height={600}
                  className="w-full object-cover shadow-xl"
                  sizes="(max-width: 1024px) 100vw, 66vw"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="lg:col-span-4"
              >
                <div className="editorial-rule mb-6 w-12" />
                <h2 className="text-caption mb-4 text-[#A63A30]">THE INTRO</h2>
                <p className="font-body text-sm leading-relaxed opacity-70">
                  Những đường nét tinh tế của áo dài truyền thống hòa quyện cùng kiến trúc Pháp cổ điển,
                  tạo nên một bức tranh hoài niệm về Sài Gòn xưa.
                </p>
              </motion.div>
            </div>
          </div>
        </LookbookSection>

        {/* Page 04 - Details & Mood */}
        <LookbookSection id="details" pageNumber="04" background="paper">
          <div className="flex min-h-screen items-center justify-center px-6 py-24 lg:px-24">
            <div className="grid w-full max-w-6xl items-center gap-8 lg:grid-cols-12">
              {/* Text column */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="order-2 lg:order-1 lg:col-span-4"
              >
                <div className="editorial-rule mb-6 w-12" />
                <h2 className="text-caption mb-4 text-[#A63A30]">DETAILS & MOOD</h2>
                <p className="font-body mb-6 text-sm leading-relaxed opacity-70">
                  Chiếc quạt nan thủ công, biểu tượng của sự duyên dáng Á Đông, được cầm nhẹ nhàng
                  như một nét chấm phá tinh tế trong không gian cổ điển.
                </p>
                <p className="font-body text-sm leading-relaxed opacity-70">
                  Ánh sáng xuyên qua cửa chớp gỗ tạo nên những vệt bóng đổ mềm mại,
                  gợi nhớ về những buổi chiều Sài Gòn yên bình.
                </p>
              </motion.div>

              {/* Images */}
              <div className="relative order-1 lg:order-2 lg:col-span-8">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                >
                  <Image
                    src="/images/lookbook/04-window.jpg"
                    alt="Window frame portrait"
                    width={800}
                    height={533}
                    className="w-full object-cover shadow-xl"
                    sizes="(max-width: 1024px) 100vw, 55vw"
                  />
                </motion.div>

                {/* Inset detail image */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="absolute -bottom-8 -left-4 w-1/3 shadow-2xl lg:-left-12"
                >
                  <Image
                    src="/images/lookbook/03-detail.jpg"
                    alt="Fan detail"
                    width={300}
                    height={200}
                    className="w-full border-4 border-[#F5F0E8] object-cover"
                    sizes="200px"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </LookbookSection>

        {/* Page 05 - The Mood */}
        <LookbookSection id="the-mood" pageNumber="05" background="cream">
          <div className="flex min-h-screen items-center justify-center px-6 py-24 lg:px-24">
            <div className="grid w-full max-w-6xl items-center gap-12 lg:grid-cols-12">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-right lg:col-span-4"
              >
                <div className="editorial-rule mb-6 ml-auto w-12" />
                <h2 className="text-caption mb-4 text-[#A63A30]">THE MOOD</h2>
                <p className="font-body text-sm leading-relaxed opacity-70">
                  Một khoảnh khắc lặng yên, nơi quá khứ và hiện tại gặp gỡ qua ánh mắt đầy hoài niệm.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-8"
              >
                <Image
                  src="/images/lookbook/04-window.jpg"
                  alt="The Mood - Window portrait"
                  width={900}
                  height={600}
                  className="w-full object-cover shadow-xl"
                  sizes="(max-width: 1024px) 100vw, 66vw"
                />
              </motion.div>
            </div>
          </div>
        </LookbookSection>

        {/* Page 06 - Outro */}
        <LookbookSection id="outro" pageNumber="06" background="dark">
          <div className="flex min-h-screen items-center justify-center px-6 py-24">
            <div className="mx-auto max-w-4xl text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <Image
                  src="/images/lookbook/05-outro.jpg"
                  alt="Outro - Fan covering face"
                  width={600}
                  height={800}
                  className="mx-auto max-h-[55vh] w-auto object-contain shadow-2xl"
                  sizes="(max-width: 768px) 90vw, 600px"
                />
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="font-heading text-4xl font-light tracking-wide text-[#D9CBB8] sm:text-5xl lg:text-6xl"
              >
                HOÀI NIỆM
              </motion.h2>

              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="mx-auto my-8 h-px w-20 bg-[#A63A30]"
              />

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
              >
                <Link
                  href="/gallery"
                  className="group inline-flex items-center gap-3 border border-[#D9CBB8]/50 px-8 py-4 text-caption text-[#D9CBB8] transition-all hover:border-[#A63A30] hover:text-[#A63A30]"
                >
                  <span>View Gallery</span>
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
            </div>
          </div>
        </LookbookSection>
      </ScrollSnapContainer>

      <GrainOverlay />
    </>
  )
}
