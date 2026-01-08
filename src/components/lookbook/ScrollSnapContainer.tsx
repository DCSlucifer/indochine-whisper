'use client'

import { useRef, useEffect, useCallback, ReactNode } from 'react'
import { useAppContext } from '@/contexts/AppContext'

interface ScrollSnapContainerProps {
  children: ReactNode
  sectionIds: string[]
}

export function ScrollSnapContainer({ children, sectionIds }: ScrollSnapContainerProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { readingModeEnabled, setCurrentPage } = useAppContext()

  // Intersection Observer for section detection
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            const index = sectionIds.indexOf(entry.target.id)
            if (index !== -1) {
              setCurrentPage(index)
            }
          }
        })
      },
      {
        root: container,
        threshold: 0.5,
      }
    )

    sectionIds.forEach((id) => {
      const section = document.getElementById(id)
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [sectionIds, setCurrentPage])

  // Keyboard navigation
  const scrollToSection = useCallback((index: number) => {
    const container = containerRef.current
    if (!container || index < 0 || index >= sectionIds.length) return

    const section = document.getElementById(sectionIds[index])
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }, [sectionIds])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const container = containerRef.current
      if (!container) return

      // Check if the container or its children have focus
      if (!container.contains(document.activeElement) && document.activeElement !== document.body) {
        return
      }

      const currentIndex = sectionIds.findIndex((id) => {
        const section = document.getElementById(id)
        if (!section) return false
        const rect = section.getBoundingClientRect()
        return rect.top >= 0 && rect.top < window.innerHeight / 2
      })

      if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        e.preventDefault()
        scrollToSection(Math.min(currentIndex + 1, sectionIds.length - 1))
      }
      if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault()
        scrollToSection(Math.max(currentIndex - 1, 0))
      }
      if (e.key === 'Home') {
        e.preventDefault()
        scrollToSection(0)
      }
      if (e.key === 'End') {
        e.preventDefault()
        scrollToSection(sectionIds.length - 1)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [sectionIds, scrollToSection])

  return (
    <div
      ref={containerRef}
      className={`h-screen overflow-y-scroll hide-scrollbar ${
        readingModeEnabled ? 'snap-container' : ''
      }`}
      tabIndex={0}
    >
      {children}
    </div>
  )
}

export function scrollToSectionById(id: string) {
  const section = document.getElementById(id)
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' })
  }
}
