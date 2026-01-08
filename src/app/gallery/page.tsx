'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { LayoutShell } from '@/components/layout/LayoutShell'
import { Lightbox } from '@/components/overlays/Lightbox'

const images = [
  { src: '/images/lookbook/01-cover.jpg', alt: 'Cover - Staircase with lilies', caption: 'Cover' },
  { src: '/images/lookbook/02-intro.jpg', alt: 'The Intro - Fan with louvers', caption: 'The Intro' },
  { src: '/images/lookbook/03-detail.jpg', alt: 'Detail - Fan close-up', caption: 'Details' },
  { src: '/images/lookbook/04-window.jpg', alt: 'Window frame portrait', caption: 'The Mood' },
  { src: '/images/lookbook/05-outro.jpg', alt: 'Outro - Fan covering face', caption: 'Hoài Niệm' },
]

export default function GalleryPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const openLightbox = (index: number) => {
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  return (
    <LayoutShell>
      <section className="min-h-screen bg-[#D9CBB8] px-6 pb-24 pt-32 lg:px-12">
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16 text-center"
          >
            <h1 className="font-heading text-4xl font-light tracking-tight text-[#1A1A1A] sm:text-5xl">
              Gallery
            </h1>
            <div className="editorial-rule mx-auto my-6 w-16" />
            <p className="font-heading text-lg italic text-[#1A1A1A]/70">
              DÁNG XƯA — một thoáng hoài niệm
            </p>
          </motion.div>

          {/* Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {images.map((image, index) => (
              <motion.div
                key={image.src}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative cursor-pointer overflow-hidden bg-[#1A1A1A]/5"
                onClick={() => openLightbox(index)}
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-[#1A1A1A]/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="w-full p-6">
                    <p className="text-caption text-[#D9CBB8]">{image.caption}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <Lightbox
        images={images}
        initialIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </LayoutShell>
  )
}
