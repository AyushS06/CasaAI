import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CasaAI',
  description: 'AI-powered property management platform that saves you hours of work in a matter of minutes. Buy, manage, and sell properties with CasaAI.',
  openGraph: {
    title: 'CasaAI - Buy, manage, & sell properties anytime & anywhere',
    description: 'AI-powered property management platform that saves you hours of work in a matter of minutes. Buy, manage, and sell properties with CasaAI.',
    type: 'website',
    url: 'https://www.casaai.org',
    siteName: 'CasaAI',
    images: [
      {
        url: '/og-image.png', // You'll need to add this image to your public folder
        width: 1200,
        height: 630,
        alt: 'CasaAI - Buy, manage, & sell properties anytime & anywhere',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CasaAI - Buy, manage, & sell properties anytime & anywhere',
    description: 'AI-powered property management platform that saves you hours of work in a matter of minutes.',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
} 
