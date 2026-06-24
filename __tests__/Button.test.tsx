import { Button } from '@/components/ui/Button'
import { render, screen } from '@testing-library/react'

describe('Button', () => {
  it('renders an internal Next link', () => {
    render(<Button href="/books">Learn more</Button>)

    expect(screen.getByRole('link', { name: 'Learn more' })).toHaveAttribute(
      'href',
      '/books'
    )
  })

  it('renders an external link with safe attributes', () => {
    render(
      <Button href="https://example.com" external>
        Buy now
      </Button>
    )

    const link = screen.getByRole('link', { name: 'Buy now' })

    expect(link).toHaveAttribute('href', 'https://example.com')
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noopener noreferrer')
  })
})
