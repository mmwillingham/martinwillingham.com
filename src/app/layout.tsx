import { Analytics } from '@/components/analytics/Analytics'
import type { Metadata } from 'next'
import { Bebas_Neue, Lora } from 'next/font/google'
import './globals.css'

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-heading',
})

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-body',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://martinwillingham.com'),
  title: {
    default: 'Martin Willingham — Author',
    template: '%s | Martin Willingham',
  },
  description:
    'Independent fiction writer specializing in stories based in the South.',
  openGraph: {
    title: 'Martin Willingham — Author',
    description:
      'Independent fiction writer specializing in stories based in the South.',
    siteName: 'Martin Willingham',
    images: [
      {
        url: '/images/author-cover.jpg', // You can update this file path when you upload your promo image or headshot
        width: 1200,
        height: 630,
        alt: 'Martin Willingham, Author',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Martin Willingham — Author',
    description:
      'Independent fiction writer specializing in stories based in the South.',
    images: ['/images/author-cover.jpg'],
  },
}

const gaId =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-HQY0B264JC'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${lora.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
      <Analytics gaId={gaId} />
    </html>
  )
}
