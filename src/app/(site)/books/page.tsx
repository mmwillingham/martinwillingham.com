import { Container } from '@/components/layout/Container'
import { booksByCategory } from '@/data/books'
import type { Metadata } from 'next'
import Link from 'next/link'

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
            {booksByCategory.map(({ category, books: categoryBooks }) => (
              <div key={category}>
                <h2 className="font-heading text-3xl uppercase tracking-[0.04em] text-zinc-950 sm:text-4xl">
                  {category}
                </h2>

                <ul className="mt-8 divide-y divide-zinc-200 border-y border-zinc-200">
                  {categoryBooks.map((book) => (
                    <li key={book.id}>
                      <Link
                        href={`/books/${book.slug}`}
                        className="group flex items-center justify-between gap-6 py-6 font-body transition-colors hover:text-[#A95633]"
                      >
                        <span className="text-xl font-medium text-zinc-950 group-hover:text-[#A95633] sm:text-2xl">
                          {book.title}
                        </span>
                        <span
                          className="shrink-0 text-sm font-semibold uppercase tracking-[0.2em] text-[#A95633] opacity-0 transition-opacity group-hover:opacity-100"
                          aria-hidden="true"
                        >
                          View &rarr;
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </main>
  )
}
