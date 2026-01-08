'use client'

import { useAppContext } from '@/contexts/AppContext'

export function GrainToggle() {
  const { grainEnabled, setGrainEnabled } = useAppContext()

  return (
    <button
      onClick={() => setGrainEnabled(!grainEnabled)}
      className={`text-caption flex items-center gap-2 transition-colors ${
        grainEnabled ? 'text-[#A63A30]' : 'text-[#1A1A1A]/60'
      }`}
      aria-label={grainEnabled ? 'Disable grain effect' : 'Enable grain effect'}
      title={grainEnabled ? 'Grain: On' : 'Grain: Off'}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
      </svg>
      <span className="hidden sm:inline">Grain</span>
    </button>
  )
}

export function ReadingModeToggle() {
  const { readingModeEnabled, setReadingModeEnabled } = useAppContext()

  return (
    <button
      onClick={() => setReadingModeEnabled(!readingModeEnabled)}
      className={`text-caption flex items-center gap-2 transition-colors ${
        readingModeEnabled ? 'text-[#A63A30]' : 'text-[#1A1A1A]/60'
      }`}
      aria-label={readingModeEnabled ? 'Disable snap scroll' : 'Enable snap scroll'}
      title={readingModeEnabled ? 'Snap: On' : 'Snap: Off'}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M3 15h18" />
      </svg>
      <span className="hidden sm:inline">Snap</span>
    </button>
  )
}
