import type { Metadata } from 'next'
import { Syne, DM_Mono, Instrument_Serif } from 'next/font/google'
import SmoothScroll from '@/components/providers/SmoothScroll'
import RouteTransition from '@/components/providers/RouteTransition'
import '@/styles/globals.css'

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const dmMono = DM_Mono({
  weight: ['300', '400', '500'],
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

const instrumentSerif = Instrument_Serif({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'X.Group International - Enterprise Automation Infrastructure',
  description:
    'Enterprise automation infrastructure for businesses that cannot afford to stand still.',
  openGraph: {
    title: 'X.Group International - Enterprise Automation Infrastructure',
    description: 'Enterprise automation infrastructure for businesses that cannot afford to stand still.',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://xgroup.io',
    siteName: 'X.Group International',
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'X.Group International',
    description: 'Enterprise automation infrastructure.',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={syne.variable + ' ' + dmMono.variable + ' ' + instrumentSerif.variable}>
      <body>
        <SmoothScroll>
          <RouteTransition>{children}</RouteTransition>
        </SmoothScroll>
      </body>
    </html>
  )
}
