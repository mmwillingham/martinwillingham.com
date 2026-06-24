import ExcerptPage from '@/app/(site)/excerpts/[slug]/page'
import { render, screen } from '@testing-library/react'

jest.mock('next/navigation', () => ({
  notFound: jest.fn(),
}))

describe('ExcerptPage', () => {
  it('renders excerpt content and book link', async () => {
    const page = await ExcerptPage({
      params: Promise.resolve({
        slug: 'matecumbe-island',
      }),
    })

    render(page)

    expect(
      screen.getByRole('heading', { name: 'Matecumbe Island' })
    ).toBeInTheDocument()

    expect(screen.getByText(/12 min read/i)).toBeInTheDocument()

    expect(
      screen.getByRole('link', { name: 'View book details' })
    ).toHaveAttribute('href', '/books/matecumbe-island')

    expect(
      screen.getByRole('link', { name: /back to excerpts/i })
    ).toHaveAttribute('href', '/#excerpts')
  })
})
