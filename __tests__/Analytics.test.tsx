import { Analytics } from '@/components/analytics/Analytics'
import { render, screen } from '@testing-library/react'

jest.mock('@next/third-parties/google', () => ({
  GoogleAnalytics: ({ gaId }: { gaId: string }) => (
    <div data-testid="google-analytics" data-ga-id={gaId} />
  ),
}))

describe('Analytics', () => {
  it('renders Google Analytics when a measurement ID is provided', () => {
    render(<Analytics gaId="G-TEST123" />)

    expect(screen.getByTestId('google-analytics')).toHaveAttribute(
      'data-ga-id',
      'G-TEST123'
    )
  })

  it('renders nothing when the measurement ID is missing', () => {
    const { container } = render(<Analytics />)

    expect(container).toBeEmptyDOMElement()
  })
})
