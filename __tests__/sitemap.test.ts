import sitemap from '@/app/sitemap'
import { books, booksWithPlaylists } from '@/data/books'

describe('sitemap', () => {
  it('includes core pages and every book, excerpt, and playlist URL', async () => {
    const entries = await sitemap()
    const urls = entries.map((entry) => entry.url)

    expect(urls).toEqual(
      expect.arrayContaining([
        'https://martinwillingham.com',
        'https://martinwillingham.com/books',
        'https://martinwillingham.com/publisher',
        'https://martinwillingham.com/where-to-find-me',
        ...books.map((book) => `https://martinwillingham.com/books/${book.slug}`),
        ...books.map(
          (book) => `https://martinwillingham.com/excerpts/${book.excerptSlug}`
        ),
        ...booksWithPlaylists.map(
          (book) =>
            `https://martinwillingham.com/books/${book.slug}/playlist`
        ),
      ])
    )
  })

  it('includes cover images for book pages', async () => {
    const entries = await sitemap()
    const blueEyes = entries.find(
      (entry) =>
        entry.url === 'https://martinwillingham.com/books/blue-eyes-black-coral'
    )

    expect(blueEyes?.images).toEqual([
      'https://martinwillingham.com/images/books/blue-eyes-black-coral.jpg',
    ])
  })
})
