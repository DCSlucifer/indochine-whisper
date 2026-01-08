'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const [showHint, setShowHint] = useState(true)
  const iframeRef = useRef<HTMLIFrameElement>(null)

  // Hide hint after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => setShowHint(false), 5000)
    return () => clearTimeout(timer)
  }, [])

  const togglePlay = () => {
    if (!isLoaded) {
      setIsLoaded(true)
      setIsPlaying(true)
    } else {
      setIsPlaying(!isPlaying)
      // Send message to YouTube iframe
      if (iframeRef.current?.contentWindow) {
        iframeRef.current.contentWindow.postMessage(
          JSON.stringify({
            event: 'command',
            func: isPlaying ? 'pauseVideo' : 'playVideo',
          }),
          '*'
        )
      }
    }
  }

  return (
    <>
      {/* Hidden YouTube Player */}
      {isLoaded && (
        <iframe
          ref={iframeRef}
          src={`https://www.youtube.com/embed/Gfa5cbj1hGA?enablejsapi=1&autoplay=1&loop=1&playlist=Gfa5cbj1hGA`}
          allow="autoplay"
          className="pointer-events-none fixed opacity-0"
          style={{ width: 0, height: 0 }}
          title="Background Music"
        />
      )}

      {/* Music Button */}
      <div className="fixed bottom-6 right-6 z-[100]">
        {/* Hint tooltip */}
        <AnimatePresence>
          {showHint && !isPlaying && (
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              className="absolute bottom-full right-0 mb-3 whitespace-nowrap rounded bg-[#1A1A1A]/80 px-3 py-2 text-xs text-[#D9CBB8]"
            >
              🎵 Nhấn để nghe nhạc
              <div className="absolute -bottom-1 right-4 h-2 w-2 rotate-45 bg-[#1A1A1A]/80" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Button */}
        <motion.button
          onClick={togglePlay}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className={`group flex h-12 w-12 items-center justify-center rounded-full border transition-all duration-300 ${
            isPlaying
              ? 'border-[#58181F] bg-[#58181F] text-[#D9CBB8]'
              : 'border-[#58181F]/30 bg-[#D9CBB8]/80 text-[#58181F] backdrop-blur-sm hover:border-[#58181F] hover:bg-[#D9CBB8]'
          }`}
          aria-label={isPlaying ? 'Pause music' : 'Play music'}
        >
          {isPlaying ? (
            // Pause icon with animation
            <div className="flex items-center gap-1">
              <motion.div
                animate={{ scaleY: [1, 1.3, 1] }}
                transition={{ repeat: Infinity, duration: 0.5 }}
                className="h-3 w-0.5 rounded-full bg-current"
              />
              <motion.div
                animate={{ scaleY: [1.3, 1, 1.3] }}
                transition={{ repeat: Infinity, duration: 0.5 }}
                className="h-3 w-0.5 rounded-full bg-current"
              />
              <motion.div
                animate={{ scaleY: [1, 1.3, 1] }}
                transition={{ repeat: Infinity, duration: 0.5, delay: 0.2 }}
                className="h-3 w-0.5 rounded-full bg-current"
              />
            </div>
          ) : (
            // Play/Music icon
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="transition-transform group-hover:scale-110"
            >
              <path d="M9 18V5l12-2v13" />
              <circle cx="6" cy="18" r="3" />
              <circle cx="18" cy="16" r="3" />
            </svg>
          )}
        </motion.button>
      </div>
    </>
  )
}
