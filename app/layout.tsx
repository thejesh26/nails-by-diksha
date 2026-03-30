import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Nails By Diksha | Nail Studio',
  description:
    'Premium nail studio offering bespoke manicures, nail extensions, nail art, and pedicures. Book your appointment with Diksha — where artistry meets elegance.',
  keywords:
    'nail studio, manicure, pedicure, nail extensions, nail art, nail salon, Nails By Diksha',
  metadataBase: new URL('https://nailsbydiksha.com'),
  openGraph: {
    title: 'Nails By Diksha | Nail Studio',
    description:
      'Premium nail studio offering bespoke manicures, nail extensions, nail art, and pedicures.',
    url: 'https://nailsbydiksha.com',
    siteName: 'Nails By Diksha',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Nails By Diksha — Premium Nail Studio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nails By Diksha | Nail Studio',
    description:
      'Premium nail studio offering bespoke manicures, nail extensions, nail art, and pedicures.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="bg-[#F5EFE6] text-[#2C1810] antialiased">{children}</body>
    </html>
  )
}
