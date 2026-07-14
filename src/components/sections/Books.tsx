'use client'

import { Container } from '@/components/layout/Container'
import { books } from '@/data/books'
import { BookGrid } from '@/components/books/BookGrid'

export function Books(): React.JSX.Element {
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
    <section id="excerpts" className="scroll-mt-20 bg-white py-24 text-zinc-950">
      <Container>
        <div className="text-center mb-20">
          <h2 className="font-heading text-5xl uppercase tracking-[0.04em] sm:text-6xl">
            Excerpts
          </h2>
        </div>

        {availableBooks.length > 0 && (
          <div className="mb-24">
            <div className="border-b border-zinc-100 pb-4">
              <p className="font-body text-sm font-semibold uppercase tracking-[0.3em] text-[#A95633]">
                Available Books
              </p>
            </div>
            <BookGrid
              booksList={availableBooks}
              getHref={(book) => `/excerpts/${book.excerptSlug}`}
            />
          </div>
        )}

        {plannedBooks.length > 0 && (
          <div>
            <div className="border-b border-zinc-100 pb-4">
              <p className="font-body text-sm font-semibold uppercase tracking-[0.3em] text-[#A95633]">
                In the Works
              </p>
            </div>
            <BookGrid
              booksList={plannedBooks}
              getHref={(book) => `/excerpts/${book.excerptSlug}`}
            />
          </div>
        )}
      </Container>
    </section>
  )
}