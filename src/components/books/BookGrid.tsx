'use client'

import Link from 'next/link'

import type { Book } from '@/types'

type BookLinkTo = 'book' | 'excerpt'

interface BookGridProps {
  booksList: Book[]
  linkTo: BookLinkTo
}

function getBookHref(book: Book, linkTo: BookLinkTo): string {
  return linkTo === 'excerpt'
    ? `/excerpts/${book.excerptSlug}`
    : `/books/${book.slug}`
}

export function BookGrid({ booksList, linkTo }: BookGridProps): React.JSX.Element {
  return (
    <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
      {booksList.map((book) => (
        <Link
          key={book.id}
          href={getBookHref(book, linkTo)}
          className="group flex flex-col bg-zinc-50 transition-transform duration-300 hover:-translate-y-1"
        >
          <div className="relative w-full overflow-hidden bg-transparent shadow-sm">
            <img
              src={book.coverImage}
              alt={book.coverAlt}
              className="block h-auto w-full transition-transform duration-500 group-hover:scale-105"
              onError={(event) => {
                ;(event.currentTarget as HTMLImageElement).src =
                  '/images/books/placeholder.jpg'
              }}
            />
          </div>

          <div className="flex flex-col p-6">
            <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
              {book.category}
            </p>
            <h3 className="mt-3 font-heading text-2xl leading-tight tracking-[0.02em] text-zinc-950 uppercase">
              {book.title}
            </h3>
          </div>
        </Link>
      ))}
    </div>
  )
}
