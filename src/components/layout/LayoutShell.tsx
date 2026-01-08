import { ReactNode } from 'react'
import { TopNav } from '@/components/navigation/TopNav'
import { GrainOverlay } from '@/components/overlays/GrainOverlay'

interface LayoutShellProps {
  children: ReactNode
  transparentNav?: boolean
  showNav?: boolean
}

export function LayoutShell({ children, transparentNav = false, showNav = true }: LayoutShellProps) {
  return (
    <>
      {showNav && <TopNav transparent={transparentNav} />}
      <main>{children}</main>
      <GrainOverlay />
    </>
  )
}

