import type { Metadata } from 'next'
import { Playfair_Display, Inter, Cormorant_Garamond } from 'next/font/google'
import { AppProvider } from '@/contexts/AppContext'
import { GlobalMusicPlayer } from '@/components/ui/GlobalMusicPlayer'
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

const cormorant = Cormorant_Garamond({
  subsets: ['latin', 'vietnamese'],
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'THE MUSE | Captured moments of my Darling',
  description: 'A personal lookbook celebrating the beauty and grace of my darling. Vintage, cinematic, and deeply romantic.',
  keywords: ['lookbook', 'fashion', 'editorial', 'vintage', 'photography', 'love', 'muse'],
  openGraph: {
    title: 'THE MUSE',
    description: 'Captured moments of my Darling.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi" className={`${playfair.variable} ${inter.variable} ${cormorant.variable}`}>
      <body className="antialiased">
        <AppProvider>
          {children}
          <GlobalMusicPlayer />
        </AppProvider>
      </body>
    </html>
  )
}

