import { Header } from '@/components/layout/Header'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

jest.mock('next/navigation', () => ({
  usePathname: () => '/',
}))

describe('Header', () => {
  it('renders navigation links with correct hrefs', () => {
    render(<Header />)

    const desktopNavigation = screen.getByRole('navigation', {
      name: 'Main navigation',
    })

    expect(
      within(desktopNavigation).getByRole('link', { name: 'Home' })
    ).toHaveAttribute('href', '/#home')

    expect(
      within(desktopNavigation).getByRole('link', { name: 'About' })
    ).toHaveAttribute('href', '/#about')

    expect(
      within(desktopNavigation).getByRole('link', { name: 'Books' })
    ).toHaveAttribute('href', '/books')

    expect(
      within(desktopNavigation).getByRole('link', { name: 'Excerpts' })
    ).toHaveAttribute('href', '/#excerpts')

    expect(
      within(desktopNavigation).getByRole('link', { name: 'Contact' })
    ).toHaveAttribute('href', '/#contact')

    expect(screen.getByRole('link', { name: 'My Publisher' })).toHaveAttribute(
      'href',
      '/publisher'
    )
  })

  it('opens and closes the mobile menu', async () => {
    const user = userEvent.setup()

    render(<Header />)

    await user.click(
      screen.getByRole('button', { name: 'Open navigation menu' })
    )

    expect(
      screen.getByRole('navigation', { name: 'Mobile menu' })
    ).toBeInTheDocument()

    await user.click(
      screen.getByRole('button', { name: 'Close navigation menu' })
    )

    expect(
      screen.queryByRole('navigation', { name: 'Mobile menu' })
    ).not.toBeInTheDocument()
  })
})
