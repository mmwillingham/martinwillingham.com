import { Container } from '@/components/layout/Container'
import { booksWithPlaylists, getBookBySlug } from '@/data/books'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

interface PlaylistPageProps {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return booksWithPlaylists.map((book) => ({ slug: book.slug }))
}

export async function generateMetadata({
  params,
}: PlaylistPageProps): Promise<Metadata> {
  const { slug } = await params
  const book = getBookBySlug(slug)

  if (!book?.playlist?.length) {
    return { title: 'Playlist Not Found' }
  }

  return {
    title: `${book.title} — Playlist`,
    description: `Chapter playlist for ${book.title} by Martin Willingham.`,
    openGraph: {
      title: `${book.title} — Playlist`,
      description: `Chapter playlist for ${book.title} by Martin Willingham.`,
      images: [{ url: book.coverImage, alt: book.coverAlt }],
      type: 'article',
    },
  }
}

export default async function BookPlaylistPage({
  params,
}: PlaylistPageProps): Promise<React.JSX.Element> {
  const { slug } = await params
  const book = getBookBySlug(slug)
  const playlist = book?.playlist

  if (!book || !playlist?.length) {
    notFound()
  }

  return (
    <main id="main-content" className="bg-zinc-50 pt-32 pb-24 text-zinc-950">
      <Container>
        <Link
          href={`/books/${book.slug}`}
          className="font-body text-sm font-medium text-[#A95633] transition-colors hover:text-zinc-950"
        >
          &larr; Back to book details
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

          <div className="flex min-w-0 flex-col">
            <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-[#A95633]">
              Playlist
            </p>
            <h1 className="mt-4 font-heading text-5xl tracking-[0.02em] uppercase sm:text-6xl">
              {book.title}
            </h1>

            <div className="mt-10">
              <div className="hidden border-b border-zinc-300 pb-3 sm:grid sm:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] sm:gap-8">
                <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-[#A95633]">
                  Chapter
                </p>
                <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-[#A95633]">
                  Song
                </p>
              </div>

              <ul aria-label={`Chapter playlist for ${book.title}`}>
                {playlist.map((track) => (
                  <li
                    key={`${track.chapter}-${track.song}`}
                    className="grid grid-cols-1 gap-2 border-b border-zinc-200 py-5 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] sm:gap-8"
                  >
                    <p className="font-heading text-xl tracking-[0.02em] text-zinc-950 sm:text-2xl">
                      {track.chapter}
                    </p>
                    <div className="font-body">
                      <p className="text-lg leading-7 text-zinc-800">
                        {track.song}
                      </p>
                      <p className="mt-1 text-sm text-zinc-600">
                        {track.artist}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </main>
  )
}
