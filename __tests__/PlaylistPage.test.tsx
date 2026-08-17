import PlaylistPage from '@/app/(site)/books/[slug]/playlist/page'
import { notFound } from 'next/navigation'
import { render, screen } from '@testing-library/react'

jest.mock('next/navigation', () => ({
  notFound: jest.fn(() => {
    throw new Error('NEXT_NOT_FOUND')
  }),
}))

describe('PlaylistPage', () => {
  it('renders the Blue Eyes Black Coral playlist', async () => {
    const page = await PlaylistPage({
      params: Promise.resolve({
        slug: 'blue-eyes-black-coral',
      }),
    })

    render(page)

    expect(
      screen.getByRole('heading', { name: 'Blue Eyes Black Coral' })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('link', { name: /back to book details/i })
    ).toHaveAttribute('href', '/books/blue-eyes-black-coral')

    expect(screen.getByText('Minor Keys')).toBeInTheDocument()
    expect(screen.getByText('The House of the Rising Sun')).toBeInTheDocument()
    expect(screen.getByText('Bob Dylan')).toBeInTheDocument()
    expect(screen.getByText("I'm So Glad")).toBeInTheDocument()
    expect(screen.getByText('The Staple Singers')).toBeInTheDocument()
  })

  it('renders the Matecumbe Island playlist', async () => {
    const page = await PlaylistPage({
      params: Promise.resolve({
        slug: 'matecumbe-island',
      }),
    })

    render(page)

    expect(
      screen.getByRole('heading', { name: 'Matecumbe Island' })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('link', { name: /back to book details/i })
    ).toHaveAttribute('href', '/books/matecumbe-island')

    expect(screen.getByText('Broken Promises')).toBeInTheDocument()
    expect(screen.getByText('Feels Like the First Time')).toBeInTheDocument()
    expect(screen.getByText('Foreigner')).toBeInTheDocument()
    expect(screen.getByText('Without Grace - Epilogue')).toBeInTheDocument()
    expect(screen.getByText('Perfect Circle')).toBeInTheDocument()
  })

  it('returns not found for books without a playlist', async () => {
    await expect(
      PlaylistPage({
        params: Promise.resolve({
          slug: 'alaska-south',
        }),
      })
    ).rejects.toThrow('NEXT_NOT_FOUND')

    expect(notFound).toHaveBeenCalled()
  })
})
