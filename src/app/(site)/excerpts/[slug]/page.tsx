import { Container } from '@/components/layout/Container'
import Link from 'next/link'
import { BookExcerptClientView } from './BookExcerptClientView'

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

// 1. Server-side static param generation works perfectly here
export function generateStaticParams() {
  return [
    { slug: 'matecumbe-island' },
    { slug: 'blue-eyes-black-coral' },
    { slug: 'the-high-life' },
    { slug: 'alaska-south' },
  ]
}

// 2. Main page export runs on the server side during compilation
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

  // Pass data smoothly down to the client view wrapper below
  return <BookExcerptClientView book={book} />
}
