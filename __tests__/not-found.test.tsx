import NotFound from '@/app/not-found'
import { render, screen } from '@testing-library/react'

describe('NotFound', () => {
  it('renders not found message and home link', () => {
    render(<NotFound />)

    expect(screen.getByText('404')).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: 'PAGE NOT FOUND' })
    ).toBeInTheDocument()

    expect(screen.getByText('Some paths lead nowhere.')).toBeInTheDocument()
    expect(screen.getByText('This was one of them.')).toBeInTheDocument()
    expect(
      screen.getByText('But there are still stories waiting for you.')
    ).toBeInTheDocument()

    expect(screen.getByRole('link', { name: 'Back to home' })).toHaveAttribute(
      'href',
      '/#home'
    )
  })
})
