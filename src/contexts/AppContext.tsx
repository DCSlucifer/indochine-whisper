'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

interface AppContextType {
  grainEnabled: boolean
  setGrainEnabled: (v: boolean) => void
  readingModeEnabled: boolean
  setReadingModeEnabled: (v: boolean) => void
  currentPage: number
  setCurrentPage: (page: number) => void
  tocOpen: boolean
  setTocOpen: (v: boolean) => void
}

const AppContext = createContext<AppContextType | null>(null)

export function AppProvider({ children }: { children: ReactNode }) {
  const [grainEnabled, setGrainEnabledState] = useState(true)
  const [readingModeEnabled, setReadingModeEnabledState] = useState(true)
  const [currentPage, setCurrentPage] = useState(0)
  const [tocOpen, setTocOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const storedGrain = localStorage.getItem('grain')
    const storedReading = localStorage.getItem('readingMode')
    if (storedGrain !== null) setGrainEnabledState(storedGrain === 'true')
    if (storedReading !== null) setReadingModeEnabledState(storedReading === 'true')
  }, [])

  const setGrainEnabled = (v: boolean) => {
    setGrainEnabledState(v)
    if (mounted) localStorage.setItem('grain', String(v))
  }

  const setReadingModeEnabled = (v: boolean) => {
    setReadingModeEnabledState(v)
    if (mounted) localStorage.setItem('readingMode', String(v))
  }

  return (
    <AppContext.Provider
      value={{
        grainEnabled,
        setGrainEnabled,
        readingModeEnabled,
        setReadingModeEnabled,
        currentPage,
        setCurrentPage,
        tocOpen,
        setTocOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export function useAppContext() {
  const ctx = useContext(AppContext)
  if (!ctx) throw new Error('useAppContext must be used within AppProvider')
  return ctx
}
