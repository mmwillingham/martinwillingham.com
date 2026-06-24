import { Contact } from '@/components/sections/Contact'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('Contact', () => {
  beforeEach(() => {
    jest.restoreAllMocks()
  })

  it('renders the contact form fields', () => {
    render(<Contact />)

    expect(screen.getByLabelText('NAME')).toBeInTheDocument()
    expect(screen.getByLabelText('EMAIL')).toBeInTheDocument()
    expect(screen.getByLabelText('MESSAGE')).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: 'Send message' })
    ).toBeInTheDocument()
  })

  it('submits valid data and shows success message', async () => {
    const user = userEvent.setup()

    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
    }) as jest.Mock

    render(<Contact />)

    await user.type(screen.getByLabelText('NAME'), 'Martin Willingham')
    await user.type(screen.getByLabelText('EMAIL'), 'martin@example.com')
    await user.type(
      screen.getByLabelText('MESSAGE'),
      'I would like to discuss your manuscripts.'
    )

    await user.click(screen.getByRole('button', { name: 'Send message' }))

    await waitFor(() => {
      expect(
        screen.getByText(/Message sent successfully/i)
      ).toBeInTheDocument()
    })
  })
})
