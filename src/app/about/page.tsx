'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { LayoutShell } from '@/components/layout/LayoutShell'

export default function AboutPage() {
  return (
    <LayoutShell>
      <section className="min-h-screen bg-[#D9CBB8] px-6 pb-24 pt-32 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-24">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src="/images/lookbook/01-cover.jpg"
                  alt="About - Portrait"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              {/* Decorative frame */}
              <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full border border-[#A63A30]" />
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="font-heading text-4xl font-light tracking-tight text-[#1A1A1A] sm:text-5xl">
                About
              </h1>

              <div className="editorial-rule my-8 w-16" />

              <div className="space-y-6 font-body text-[#1A1A1A]/80">
                <p className="leading-relaxed">
                  <span className="font-heading text-2xl italic">&ldquo;INDOCHINE WHISPER&rdquo;</span> là một
                  lookbook editorial khám phá vẻ đẹp hoài niệm của thời kỳ Đông Dương — nơi giao thoa giữa
                  văn hóa Việt Nam và kiến trúc thuộc địa Pháp.
                </p>

                <p className="leading-relaxed">
                  Bộ ảnh được thực hiện tại những công trình kiến trúc cổ kính của Sài Gòn,
                  với ánh sáng tự nhiên xuyên qua những khung cửa chớp gỗ tạo nên những vệt bóng đổ mềm mại,
                  gợi nhớ về một thời kỳ thanh lịch đã qua.
                </p>

                <p className="leading-relaxed">
                  Chiếc áo dài linen terracotta — màu của đất, của rễ nguồn —
                  kết hợp cùng những phụ kiện thủ công truyền thống như quạt nan, hoa huệ tây,
                  tạo nên một câu chuyện thị giác đậm chất điện ảnh.
                </p>
              </div>

              <div className="editorial-rule my-8 w-16" />

              <p className="font-heading text-lg italic text-[#A63A30]">
                DÁNG XƯA — một thoáng hoài niệm
              </p>

              <div className="mt-12">
                <Link
                  href="/lookbook"
                  className="group inline-flex items-center gap-3 border border-[#A63A30] px-8 py-4 text-caption text-[#A63A30] transition-all hover:bg-[#A63A30] hover:text-[#D9CBB8]"
                >
                  <span>View Lookbook</span>
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
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </LayoutShell>
  )
}
