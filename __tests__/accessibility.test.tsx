import SiteLayout from '@/app/(site)/layout'
import Home from '@/app/(site)/page'
import { Header } from '@/components/layout/Header'
import { Contact } from '@/components/sections/Contact'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

jest.mock('next/navigation', () => ({
  usePathname: () => '/',
}))

describe('accessibility improvements', () => {
  it('renders a skip link to the main content', async () => {
    const user = userEvent.setup()

    render(
      <SiteLayout>
        <main id="main-content">Main content</main>
      </SiteLayout>
    )

    const skipLink = screen.getByRole('link', {
      name: 'Skip to main content',
    })

    expect(skipLink).toHaveAttribute('href', '#main-content')

    await user.tab()

    expect(skipLink).toHaveFocus()
  })

  it('renders home page with main content landmark', () => {
    render(<Home />)

    expect(screen.getByRole('main')).toHaveAttribute('id', 'main-content')
  })

  it('marks active header navigation item with aria-current', () => {
    render(<Header />)

    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute(
      'aria-current',
      'page'
    )
  })

  it('renders accessible contact form fields', () => {
    render(<Contact />)

    expect(screen.getByLabelText('NAME')).toBeRequired()
    expect(screen.getByLabelText('EMAIL')).toBeRequired()
    expect(screen.getByLabelText('MESSAGE')).toBeRequired()
  })
})
