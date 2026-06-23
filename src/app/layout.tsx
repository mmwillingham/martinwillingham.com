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
  metadataBase: new URL('https://www.cabralcorreia.com.br'),
  title: {
    default: 'Cabral Correia — Escritor',
    template: '%s | Cabral Correia',
  },
  description:
    'Escritor brasileiro de contos realistas. Conheça Carne e Osso, coletânea sobre violência, amor, desigualdade e os absurdos do cotidiano.',
  openGraph: {
    title: 'Cabral Correia — Escritor',
    description:
      'Conheça Carne e Osso, coletânea de contos realistas sobre violência, amor, desigualdade e os absurdos do cotidiano.',
    siteName: 'Cabral Correia',
    images: [
      {
        url: '/images/cabral-correia-cover.jpg',
        width: 1200,
        height: 630,
        alt: 'Cabral Correia, autor de Carne e Osso',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cabral Correia — Escritor',
    description:
      'Conheça Carne e Osso, coletânea de contos realistas sobre violência, amor, desigualdade e os absurdos do cotidiano.',
    images: ['/images/cabral-correia-cover.jpg'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${bebasNeue.variable} ${lora.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  )
}
