import type { MetadataRoute } from 'next'
import { books, booksWithPlaylists } from '@/data/books'

export const dynamic = 'force-static'

const siteUrl = 'https://martinwillingham.com'

function pageUrl(path = ''): string {
  return `${siteUrl}${path}`
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: pageUrl(),
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: pageUrl('/books'),
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: pageUrl('/publisher'),
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: pageUrl('/where-to-find-me'),
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.4,
    },
  ]

  const bookPages: MetadataRoute.Sitemap = books.map((book) => ({
    url: pageUrl(`/books/${book.slug}`),
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
    images: [pageUrl(book.coverImage)],
  }))

  const excerptPages: MetadataRoute.Sitemap = books.map((book) => ({
    url: pageUrl(`/excerpts/${book.excerptSlug}`),
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  const playlistPages: MetadataRoute.Sitemap = booksWithPlaylists.map(
    (book) => ({
      url: pageUrl(`/books/${book.slug}/playlist`),
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    })
  )

  return [...staticPages, ...bookPages, ...excerptPages, ...playlistPages]
}
