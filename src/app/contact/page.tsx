'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { LayoutShell } from '@/components/layout/LayoutShell'

const socialLinks = [
  { name: 'Instagram', href: 'https://www.instagram.com/t.danh_vo/', icon: 'IG' },
  { name: 'Facebook', href: 'https://www.facebook.com/Danhlucifer2304', icon: 'FB' },
  { name: 'Pinterest', href: '#', icon: 'PIN' },
  { name: 'Behance', href: '#', icon: 'BE' },
]

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setStatus('success')
    setFormState({ name: '', email: '', message: '' })

    // Reset status after delay
    setTimeout(() => setStatus('idle'), 3000)
  }

  return (
    <LayoutShell>
      <section className="min-h-screen bg-[#D9CBB8] px-6 pb-24 pt-32 lg:px-12">
        <div className="mx-auto max-w-6xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16 text-center"
          >
            <h1 className="font-heading text-4xl font-light tracking-tight text-[#1A1A1A] sm:text-5xl">
              Contact
            </h1>
            <div className="editorial-rule mx-auto my-6 w-16" />
          </motion.div>

          <div className="grid gap-16 lg:grid-cols-2">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="text-caption mb-2 block text-[#1A1A1A]">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full border-b border-[#1A1A1A]/30 bg-transparent px-0 py-3 font-body text-[#1A1A1A] outline-none transition-colors focus:border-[#A63A30]"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="text-caption mb-2 block text-[#1A1A1A]">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full border-b border-[#1A1A1A]/30 bg-transparent px-0 py-3 font-body text-[#1A1A1A] outline-none transition-colors focus:border-[#A63A30]"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="text-caption mb-2 block text-[#1A1A1A]">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full resize-none border-b border-[#1A1A1A]/30 bg-transparent px-0 py-3 font-body text-[#1A1A1A] outline-none transition-colors focus:border-[#A63A30]"
                    placeholder="Your message..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="group inline-flex items-center gap-3 border border-[#A63A30] px-8 py-4 text-caption text-[#A63A30] transition-all hover:bg-[#A63A30] hover:text-[#D9CBB8] disabled:opacity-50"
                >
                  {status === 'loading' ? (
                    <span>Sending...</span>
                  ) : status === 'success' ? (
                    <span>Message Sent!</span>
                  ) : (
                    <>
                      <span>Send Message</span>
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
                    </>
                  )}
                </button>
              </form>
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="lg:pl-12"
            >
              <div className="editorial-rule mb-8 w-12" />

              <h2 className="text-caption mb-4 text-[#A63A30]">GET IN TOUCH</h2>

              <p className="mb-8 font-body text-[#1A1A1A]/80">
                For collaborations, inquiries, or just to say hello — reach out anytime.
              </p>

              <a
                href="vothanhdanh8208@gmail.com"
                className="mb-12 block font-heading text-xl text-[#1A1A1A] transition-colors hover:text-[#A63A30]"
              >
                vothanhdanh8208@gmail.com
              </a>

              <div className="editorial-rule my-8 w-12" />

              <h2 className="text-caption mb-6 text-[#A63A30]">FOLLOW</h2>

              <div className="flex gap-6">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-caption text-[#1A1A1A] transition-colors hover:text-[#A63A30]"
                    aria-label={link.name}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>

              <div className="editorial-rule my-12 w-full opacity-30" />

              <p className="font-heading text-sm italic text-[#1A1A1A]/60">
                DÁNG XƯA — một thoáng hoài niệm
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </LayoutShell>
  )
}
