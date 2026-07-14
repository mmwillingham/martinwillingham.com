import { Container } from '@/components/layout/Container'
import { books } from '@/data/books'
import { BookGrid } from '@/components/books/BookGrid'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Books',
  description:
    'Explore the novels and nonfiction of Martin Willingham, including the Black Coral series and Alaska South.',
  openGraph: {
    title: 'Books — Martin Willingham',
    description:
      'Explore the novels and nonfiction of Martin Willingham, including the Black Coral series and Alaska South.',
    type: 'website',
  },
}

export default function BooksPage(): React.JSX.Element {
  const availableBooks = books.filter(
    (book) =>
      !book.title.toLowerCase().includes('(planned)') &&
      !book.title.toLowerCase().includes('(coming soon)')
  )

  const plannedBooks = books.filter((book) =>
    book.title.toLowerCase().includes('(planned)') ||
    book.title.toLowerCase().includes('(coming soon)')
  )

  return (
    <main id="main-content" className="flex-1 bg-zinc-100 pt-20 text-zinc-950">
      <section className="py-14 sm:py-20 lg:py-24">
        <Container>
          <div className="text-center">
            <p className="mb-5 font-body text-sm font-semibold uppercase tracking-[0.3em] text-[#A95633]">
              Published Work
            </p>
            <h1 className="font-heading text-6xl leading-none tracking-[0.04em] text-zinc-950 sm:text-7xl lg:text-8xl">
              BOOKS
            </h1>
            <p className="mx-auto mt-8 max-w-2xl font-body text-lg leading-8 text-zinc-700">
              Novels, series fiction, and nonfiction—organized by collection.
            </p>
          </div>

          <div className="mt-16 space-y-16">
            {availableBooks.length > 0 && (
              <div className="mb-24">
                <div className="border-b border-zinc-200 pb-4">
                  <p className="font-body text-sm font-semibold uppercase tracking-[0.3em] text-[#A95633]">
                    Available Books
                  </p>
                </div>
                <BookGrid
                  booksList={availableBooks}
                  getHref={(book) => `/books/${book.slug}`}
                />
              </div>
            )}

            {plannedBooks.length > 0 && (
              <div>
                <div className="border-b border-zinc-200 pb-4">
                  <p className="font-body text-sm font-semibold uppercase tracking-[0.3em] text-[#A95633]">
                    In the Works
                  </p>
                </div>
                <BookGrid
                  booksList={plannedBooks}
                  getHref={(book) => `/books/${book.slug}`}
                />
              </div>
            )}
          </div>
        </Container>
      </section>
    </main>
  )
}
