import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import '@fontsource/cormorant-garamond/400.css'
import '@fontsource/cormorant-garamond/500.css'
import '@fontsource/cormorant-garamond/600.css'
import '@fontsource/cormorant-garamond/400-italic.css'
import '@fontsource/ibm-plex-sans/400.css'
import '@fontsource/ibm-plex-sans/500.css'
import '@fontsource/ibm-plex-sans/600.css'
import './globals.css'

export const metadata: Metadata = {
  title: 'Metta Tropical Collective | A Wisdom-Centered Community for Times Between Worlds',
  description: 'An experimental, place-based community of transformation, inquiry and practice, nurturing a new and ancient leadership paradigm in times of systemic collapse.',
  keywords: ['metacrisis', 'wisdom', 'community', 'transformation', 'education', 'Brazil', 'collective', 'sacred'],
  openGraph: {
    title: 'Metta Tropical Collective',
    description: 'Nurturing a community of transformation, inquiry and practice in service of a wisdom-centered future.',
    type: 'website',
  },
}

export const viewport = {
  themeColor: '#FFFFFF',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className="font-ui antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
