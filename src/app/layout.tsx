import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import { AppProvider } from '@/contexts/AppContext'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin', 'vietnamese'],
  variable: '--font-playfair',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin', 'vietnamese'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'INDOCHINE WHISPER | DÁNG XƯA — một thoáng hoài niệm',
  description: 'A high-fashion editorial lookbook exploring the nostalgic beauty of Indochine aesthetics. Vintage, cinematic, and deeply evocative.',
  keywords: ['Indochine', 'lookbook', 'fashion', 'editorial', 'vintage', 'Saigon', 'photography'],
  openGraph: {
    title: 'INDOCHINE WHISPER',
    description: 'DÁNG XƯA — một thoáng hoài niệm',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi" className={`${playfair.variable} ${inter.variable}`}>
      <body className="antialiased">
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  )
}
