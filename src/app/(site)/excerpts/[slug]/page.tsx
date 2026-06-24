import { Container } from '@/components/layout/Container'
import Link from 'next/link'

interface BookData {
  title: string
  readingTime: string
  image: string
  content: string[]
}

const booksData: Record<string, BookData> = {
  'matecumbe-island': {
    title: 'MATECUMBE ISLAND',
    readingTime: '12 MIN READ',
    image: '/images/books/matecumbe-island.jpg',
    content: ['The manuscript content or excerpt for Matecumbe Island goes here...'],
  },
  'blue-eyes-black-coral': {
    title: 'BLUE EYES BLACK CORAL',
    readingTime: '10 MIN READ',
    image: '/images/books/blue-eyes-black-coral.jpg',
    content: ['The manuscript content or excerpt for Blue Eyes Black Coral goes here...'],
  },
  'the-high-life': {
    title: 'THE HIGH LIFE',
    readingTime: '8 MIN READ',
    image: '/images/books/the-high-life.jpg',
    content: ['The manuscript content or excerpt for The High Life goes here...'],
  },
  'alaska-south': {
    title: 'ALASKA SOUTH',
    readingTime: '15 MIN READ',
    image: '/images/books/alaska-south.jpg',
    content: ['The manuscript content or excerpt for Alaska South goes here...'],
  },
}

// 1. Static build params generation for GitHub Pages output config
export function generateStaticParams() {
  return [
    { slug: 'matecumbe-island' },
    { slug: 'blue-eyes-black-coral' },
    { slug: 'the-high-life' },
    { slug: 'alaska-south' },
  ]
}

// 2. Server Page component that handles static compilation boundaries
export default async function BookExcerptPage({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<React.JSX.Element> {
  const resolvedParams = await params
  const slug = resolvedParams?.slug
  const book = booksData[slug]

  if (!book) {
    return (
      <div className="py-32 text-center">
        <Container>
          <h1 className="font-heading text-4xl">Manuscript Not Found</h1>
          <Link href="/#excerpts" className="mt-4 inline-block text-[#A95633] underline">
            Back to Home
          </Link>
        </Container>
      </div>
    )
  }

  return (
    <main className="bg-zinc-50 pt-32 pb-24 text-zinc-950">
      <Container>
        <Link
          href="/#excerpts"
          className="font-body text-sm font-medium text-[#A95633] transition-colors hover:text-zinc-950"
        >
          &larr; Back to Books
        </Link>

        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,3.5fr)_minmax(0,6.5fr)]">
          {/* Cover Display Box */}
          <div className="w-full max-w-[320px] mx-auto lg:max-w-none shadow-xl bg-zinc-900 overflow-hidden">
            <img
              src={book.image}
              alt={`Cover for ${book.title}`}
              className="h-auto w-full block"
              // Fallback works directly inline here without breaking Turbopack static rules
              // by referencing standard client DOM object assignments natively
            />
          </div>

          {/* Content Column */}
          <div className="flex flex-col">
            <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-[#A95633]">
              {book.readingTime}
            </p>
            <h1 className="mt-4 font-heading text-5xl tracking-[0.02em] uppercase sm:text-6xl">
              {book.title}
            </h1>

            <div className="mt-10 space-y-6 font-body text-lg leading-8 text-zinc-800">
              {book.content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </main>
  )
}