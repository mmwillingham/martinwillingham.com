'use client'

import { Container } from '@/components/layout/Container'
import { books } from '@/data/books'
import Link from 'next/link'

export function Books(): React.JSX.Element {
  return (
    <section id="excerpts" className="scroll-mt-20 bg-white py-24 text-zinc-950">
      <Container>
        <div className="text-center">
          <p className="mb-4 font-body text-sm font-semibold uppercase tracking-[0.3em] text-[#A95633]">
            Selected Fiction
          </p>
          <h2 className="font-heading text-5xl uppercase tracking-[0.04em] sm:text-6xl">
            Manuscripts & Excerpts
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {books.map((book) => (
            <Link
              key={book.id}
              href={`/excerpts/${book.excerptSlug}`}
              className="group flex flex-col bg-zinc-50 transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="relative w-full overflow-hidden bg-transparent shadow-sm">
                <img
                  src={book.coverImage}
                  alt={book.coverAlt}
                  className="block h-auto w-full transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    ;(e.target as HTMLImageElement).src =
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
      </Container>
    </section>
  )
}
