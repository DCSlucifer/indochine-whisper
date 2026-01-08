'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { LayoutShell } from '@/components/layout/LayoutShell'

export default function ForDarlingPage() {
  const [showPopup, setShowPopup] = useState(false)

  return (
    <LayoutShell>
      {/* Grain texture overlay */}
      <div
        className="pointer-events-none fixed inset-0 z-[1] opacity-[0.04] mix-blend-multiply"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: '150px',
        }}
      />

      <section className="relative min-h-screen overflow-hidden bg-[#D9CBB8]">
        {/* Large decorative text in background */}
        <div className="pointer-events-none absolute right-[-10%] top-[15%] select-none font-[family-name:var(--font-cormorant)] text-[25vw] font-light italic leading-none text-[#58181F]/[0.03]">
          ♡
        </div>

        <div className="relative z-10 flex min-h-screen items-center justify-center px-6 py-32">
          {/* Letter container */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="w-full max-w-2xl"
          >
            {/* Letter header */}
            <header className="mb-16 text-center">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="font-[family-name:var(--font-inter)] text-xs uppercase tracking-[0.3em] text-[#333]/40"
              >
                A letter
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="mt-4 font-[family-name:var(--font-cormorant)] text-5xl font-light italic tracking-tight text-[#58181F] sm:text-6xl"
              >
                For Darling
              </motion.h1>
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="mx-auto mt-8 h-px w-20 bg-[#58181F]/30"
              />
            </header>

            {/* Letter body */}
            <div className="space-y-12">
              {/* Greeting */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="font-[family-name:var(--font-cormorant)] text-2xl italic text-[#333]"
              >
                My Bae,
              </motion.p>

              {/* Paragraph 1 */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="font-[family-name:var(--font-cormorant)] text-xl leading-relaxed text-[#333] sm:text-2xl"
              >
                Cảm ơn em, tất cả gì về anh nhờ em anh mới rõ.
              </motion.p>

              {/* Paragraph 2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="space-y-6"
              >
                <p className="font-[family-name:var(--font-cormorant)] text-xl leading-relaxed text-[#333] sm:text-2xl">
                  Xin lỗi em, anh nói câu này không phải để xin lỗi em đâu, để sửa.
                  Dù sao thì hành động vẫn mãi thiết thực hơn.
                </p>
                <p className="font-[family-name:var(--font-cormorant)] text-xl leading-relaxed text-[#333] sm:text-2xl">
                  Anh không phải người biết cách ăn nói, nhưng mặc kệ chuyện gì xảy ra,
                  anh luôn đứng về phía em.
                </p>
              </motion.div>

              {/* Divider */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mx-auto h-px w-12 bg-[#58181F]/20"
              />

              {/* Key quote */}
              <motion.blockquote
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.8 }}
                className="py-8 text-center"
              >
                <p className="font-[family-name:var(--font-cormorant)] text-2xl font-light italic leading-relaxed text-[#333] sm:text-3xl">
                  &ldquo;Chính những điều mà em tự ti,
                </p>
                <p className="mt-2 font-[family-name:var(--font-cormorant)] text-2xl font-light italic leading-relaxed text-[#58181F] sm:text-3xl">
                  là điều mà anh yêu nhất.&rdquo;
                </p>
              </motion.blockquote>

              {/* Divider */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mx-auto h-px w-12 bg-[#58181F]/20"
              />

              {/* Closing */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.8 }}
                className="pt-8 text-right"
              >
                <p className="font-[family-name:var(--font-cormorant)] text-xl italic text-[#333]">
                  Thủ Đức, ngày 8, tháng 1, năm 2026,
                </p>
                <p className="mt-4 font-[family-name:var(--font-cormorant)] text-lg text-[#333]/60">
                  — Thành Danh —
                </p>
              </motion.div>
            </div>

            {/* Letter footer - Gift link */}
            <motion.footer
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mt-20 text-center"
            >
              <div className="mb-8 h-px w-full bg-[#58181F]/10" />


              <button
                onClick={() => setShowPopup(true)}
                className="group inline-flex items-center gap-3 text-[#58181F] transition-colors hover:text-[#58181F]/70"
              >
                <span className="font-[family-name:var(--font-cormorant)] text-lg italic">
                  Touch here my bae
                </span>
                <span className="relative">
                  <svg
                    width="24"
                    height="12"
                    viewBox="0 0 24 12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    className="transition-transform group-hover:translate-x-1"
                  >
                    <path d="M0 6h22M18 1l4 5-4 5" />
                  </svg>
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#58181F] transition-all duration-500 group-hover:w-full" />
                </span>
              </button>
            </motion.footer>
          </motion.article>
        </div>
      </section>

      {/* Popup Modal */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[1000] flex items-center justify-center p-6"
            onClick={() => setShowPopup(false)}
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute inset-0 bg-[#1A1A1A]/85 backdrop-blur-md"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 max-w-sm text-center"
              onClick={(e) => e.stopPropagation()}
            >
              <p className="mb-8 font-[family-name:var(--font-inter)] text-xs uppercase tracking-[0.2em] text-[#D9CBB8]/50">
                Tap anywhere to close
              </p>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="font-[family-name:var(--font-cormorant)] text-3xl font-light italic leading-relaxed text-[#D9CBB8] sm:text-4xl"
              >
                Dù thế nào anh cũng đỡ lấy em
              </motion.h2>

              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="mx-auto my-8 h-px w-16 bg-[#D9CBB8]/30"
              />

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mb-8 font-[family-name:var(--font-inter)] text-sm tracking-wide text-[#D9CBB8]/60"
              >
                Quét mã để nghe bài hát này nhé
              </motion.p>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="mx-auto w-44 rounded-sm bg-white p-3"
              >
                <Image
                  src="/images/qr-song.png"
                  alt="QR Code - Bài hát cho em"
                  width={180}
                  height={180}
                  className="w-full"
                />
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="mt-8 font-[family-name:var(--font-cormorant)] text-sm italic text-[#D9CBB8]/40"
              >
                ♡
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </LayoutShell>
  )
}
