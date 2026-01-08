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
                  <span className="font-heading text-2xl italic">&ldquo;THE MUSE&rdquo;</span> là một
                  lookbook editorial lưu giữ những khoảnh khắc đẹp nhất, Hương Liên —
                  nguồn cảm hứng bất tận của anh.
                </p>

                <p className="leading-relaxed">
                  Không cầu kỳ hoa mỹ, bộ lookbook này chỉ đơn giản là cách anh muốn 'đóng băng' thời gian. Anh muốn giữ lại khoảnh khắc em đứng bên khung cửa gỗ Sài Gòn, khi vệt nắng chiều vô tình vương trên mái tóc.
                </p>

                <p className="leading-relaxed">
                  Sắc mộc mạc của áo dài Linen, nét duyên thầm bên đóa huệ tây... tất cả tạo nên một bức tranh ký ức mà anh trân quý nhất. Đây không chỉ là những tấm ảnh, đây là cách anh nhìn thấy em: Đẹp, bình yên và duy nhất.
                </p>
              </div>

              <div className="editorial-rule my-8 w-16" />

              <p className="font-heading text-lg italic text-[#A63A30]">
                Captured moments of my Darling.
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
