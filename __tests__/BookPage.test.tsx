import BookPage from '@/app/(site)/books/[slug]/page'
import { render, screen } from '@testing-library/react'

jest.mock('next/navigation', () => ({
  notFound: jest.fn(),
}))

describe('BookPage', () => {
  it('links to the playlist from Blue Eyes Black Coral', async () => {
    const page = await BookPage({
      params: Promise.resolve({
        slug: 'blue-eyes-black-coral',
      }),
    })

    render(page)

    expect(
      screen.getByRole('heading', { name: 'BLUE EYES BLACK CORAL' })
    ).toBeInTheDocument()

    expect(screen.getByRole('link', { name: 'Playlist' })).toHaveAttribute(
      'href',
      '/books/blue-eyes-black-coral/playlist'
    )
  })

  it('links to the playlist from Matecumbe Island', async () => {
    const page = await BookPage({
      params: Promise.resolve({
        slug: 'matecumbe-island',
      }),
    })

    render(page)

    expect(screen.getByRole('link', { name: 'Playlist' })).toHaveAttribute(
      'href',
      '/books/matecumbe-island/playlist'
    )
  })

  it('does not show a playlist link for books without one', async () => {
    const page = await BookPage({
      params: Promise.resolve({
        slug: 'alaska-south',
      }),
    })

    render(page)

    expect(
      screen.queryByRole('link', { name: 'Playlist' })
    ).not.toBeInTheDocument()
  })
})
