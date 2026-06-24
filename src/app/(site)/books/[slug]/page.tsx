import { Container } from '@/components/layout/Container'
import { Button } from '@/components/ui/Button'
import { books, getBookBySlug } from '@/data/books'
import type { BookMetadata } from '@/types'
import type { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'

interface BookPageProps {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return books.map((book) => ({ slug: book.slug }))
}

export async function generateMetadata({
  params,
}: BookPageProps): Promise<Metadata> {
  const { slug } = await params
  const book = getBookBySlug(slug)

  if (!book) {
    return { title: 'Book Not Found' }
  }

  return {
    title: book.title,
    description: book.description[0],
    openGraph: {
      title: `${book.title} — Martin Willingham`,
      description: book.description[0],
      images: [
        {
          url: book.coverImage,
          alt: book.coverAlt,
        },
      ],
      type: 'book',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${book.title} — Martin Willingham`,
      description: book.description[0],
      images: [book.coverImage],
    },
  }
}

const metadataFields: {
  key: keyof BookMetadata
  label: string
}[] = [
  { key: 'publisher', label: 'Publisher' },
  { key: 'year', label: 'Year' },
  { key: 'pages', label: 'Pages' },
  { key: 'format', label: 'Format' },
]

export default async function BookPage({
  params,
}: BookPageProps): Promise<React.JSX.Element> {
  const { slug } = await params
  const book = getBookBySlug(slug)

  if (!book) {
    notFound()
  }

  const visibleMetadata = metadataFields.filter(
    (field) => book.metadata?.[field.key]
  )

  return (
    <main id="main-content" className="flex-1 bg-zinc-100 pt-20 text-zinc-950">
      <section className="py-14 sm:py-20 lg:py-24">
        <Container>
          <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-[minmax(0,4fr)_minmax(0,6fr)] lg:gap-20">
            <div className="flex justify-center lg:sticky lg:top-28 lg:justify-start">
              <Image
                src={book.coverImage}
                alt={book.coverAlt}
                width={459}
                height={616}
                priority
                className="h-auto w-[260px] shadow-[0_30px_80px_rgba(0,0,0,0.35)] sm:w-[340px] lg:w-[390px]"
              />
            </div>

            <div className="min-w-0">
              <p className="mb-5 font-body text-sm font-semibold uppercase tracking-[0.3em] text-[#A95633]">
                {book.eyebrow}
              </p>

              <h1 className="font-heading text-6xl leading-none tracking-[0.04em] text-zinc-950 sm:text-7xl lg:text-8xl">
                {book.title.toUpperCase()}
              </h1>

              <div className="mt-8 space-y-6 font-body text-lg leading-8 text-zinc-800">
                {book.description.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              {visibleMetadata.length > 0 && (
                <div className="mt-10 grid grid-cols-2 gap-4 font-body text-sm text-zinc-700 sm:grid-cols-4">
                  {visibleMetadata.map((field) => (
                    <div key={field.key}>
                      <p className="font-semibold uppercase tracking-[0.2em] text-[#A95633]">
                        {field.label}
                      </p>
                      <p className="mt-2">{book.metadata?.[field.key]}</p>
                    </div>
                  ))}
                </div>
              )}

              {book.callout && (
                <div className="mt-10 border-l-2 border-[#A95633] pl-5 font-body text-base leading-7 text-zinc-700">
                  <p>{book.callout}</p>
                </div>
              )}

              {book.retailLinks.length > 0 && (
                <div className="mt-10">
                  <h2 className="font-body text-sm font-semibold uppercase tracking-[0.2em] text-[#A95633]">
                    Buy
                  </h2>
                  <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                    {book.retailLinks.map((link) => (
                      <Button
                        key={link.label}
                        href={link.url}
                        external
                        tone="light"
                      >
                        {link.label}
                      </Button>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-10">
                <Button
                  href={`/excerpts/${book.excerptSlug}`}
                  variant="outline"
                  tone="light"
                >
                  Read Excerpt
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  )
}
