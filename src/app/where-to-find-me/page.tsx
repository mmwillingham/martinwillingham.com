import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Where to Find Me',
  description:
    'Official links for Martin Willingham: website, contact, and latest manuscripts including Matecumbe Island.',
  openGraph: {
    title: 'Where to Find Me — Martin Willingham',
    description:
      'Official links for Martin Willingham: website, contact, and latest manuscripts including Matecumbe Island.',
    images: [
      {
        url: '/images/profile.jpg', // Make sure this matches your portrait image path
        width: 1200,
        height: 630,
        alt: 'Martin Willingham',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Where to Find Me — Martin Willingham',
    description:
      'Official links for Martin Willingham: website, contact, and latest manuscripts including Matecumbe Island.',
    images: ['/images/profile.jpg'],
  },
}

export default function WhereToFindMePage(): React.JSX.Element {
  return (
    <main className="flex min-h-screen items-center justify-center bg-zinc-100 px-6 py-24">
      <div className="w-full max-w-xl text-center">
        <Image
          src="/images/solo.jpg"
          alt="Martin Willingham"
          width={220}
          height={220}
          priority
          className="mx-auto rounded-full border border-zinc-300 object-cover"
        />

        <h1 className="mt-8 font-heading text-6xl tracking-[0.12em] text-zinc-950 uppercase">
          MARTIN WILLINGHAM
        </h1>

        <p className="mt-6 font-body text-xl leading-9 text-zinc-700">
          Southern Noir Author.
          <br />
          Writer of <em>Matecumbe Island</em> &amp; <em>Blue Eyes Black Coral</em>.
        </p>

        <div className="mt-12 flex flex-col gap-4">
          <Link
            href="/#excerpts"
            className="flex h-14 items-center justify-center border border-zinc-950 bg-zinc-950 px-6 font-body text-lg text-white transition-colors hover:border-[#A95633] hover:bg-[#A95633]"
          >
            Read Manuscript Excerpts
          </Link>

          <a
            href="https://www.martinwillingham.com"
            className="flex h-14 items-center justify-center border border-zinc-950 px-6 font-body text-lg text-zinc-950 transition-colors hover:border-[#A95633] hover:text-[#A95633]"
          >
            Official Website
          </a>

          <Link
            href="/#about"
            className="flex h-14 items-center justify-center border border-zinc-950 px-6 font-body text-lg text-zinc-950 transition-colors hover:border-[#A95633] hover:text-[#A95633]"
          >
            About the Author
          </Link>

          <Link
            href="/#contact"
            className="flex h-14 items-center justify-center border border-zinc-950 px-6 font-body text-lg text-zinc-950 transition-colors hover:border-[#A95633] hover:text-[#A95633]"
          >
            Contact &amp; Inquiries
          </Link>
        </div>
      </div>
    </main>
  )
}