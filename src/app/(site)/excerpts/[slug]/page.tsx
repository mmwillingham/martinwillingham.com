import { Container } from '@/components/layout/Container'
import {
  books,
  getBookByExcerptSlug,
  parseExcerptContent,
} from '@/data/books'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

interface ExcerptPageProps {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return books.map((book) => ({ slug: book.excerptSlug }))
}

export async function generateMetadata({
  params,
}: ExcerptPageProps): Promise<Metadata> {
  const { slug } = await params
  const book = getBookByExcerptSlug(slug)

  if (!book) {
    return { title: 'Excerpt Not Found' }
  }

  return {
    title: `${book.title} — Excerpt`,
    description: book.description[0],
    openGraph: {
      title: `${book.title} — Excerpt`,
      description: book.description[0],
      images: [{ url: book.coverImage, alt: book.coverAlt }],
      type: 'article',
    },
  }
}

export default async function BookExcerptPage({
  params,
}: ExcerptPageProps): Promise<React.JSX.Element> {
  const { slug } = await params
  const book = getBookByExcerptSlug(slug)

  if (!book) {
    notFound()
  }

  const paragraphs = parseExcerptContent(book.excerptContent)

  return (
    <main className="bg-zinc-50 pt-32 pb-24 text-zinc-950">
      <Container>
        <Link
          href="/#excerpts"
          className="font-body text-sm font-medium text-[#A95633] transition-colors hover:text-zinc-950"
        >
          &larr; Back to excerpts
        </Link>

        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,3.5fr)_minmax(0,6.5fr)]">
          <div className="mx-auto w-full max-w-[320px] overflow-hidden bg-zinc-900 shadow-xl lg:max-w-none">
            <Image
              src={book.coverImage}
              alt={book.coverAlt}
              width={459}
              height={616}
              className="block h-auto w-full"
            />
          </div>

          <div className="flex flex-col">
            <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-[#A95633]">
              {book.readingTime} min read
            </p>
            <h1 className="mt-4 font-heading text-5xl tracking-[0.02em] uppercase sm:text-6xl">
              {book.title}
            </h1>

            <div className="mt-10 space-y-6 font-body text-lg leading-8 text-zinc-800">
              {paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <Link
              href={`/books/${book.slug}`}
              className="mt-10 inline-flex h-12 items-center justify-center border border-zinc-950 px-8 font-body text-base text-zinc-950 transition-colors hover:border-[#A95633] hover:text-[#A95633]"
            >
              View book details
            </Link>
          </div>
        </div>
      </Container>
    </main>
  )
}
