import { Container } from '@/components/layout/Container'

const currentYear = new Date().getFullYear()

const socialLinks = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/mmwillingham/',
    iconClassName: "[mask-image:url('/icons/instagram.svg')] h-8 w-8",
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/mmwillingham/',
    iconClassName: "[mask-image:url('/icons/facebook.svg')] h-8 w-8",
  },
  {
    label: 'Goodreads',
    href: 'https://www.goodreads.com/user/show/35114513-martin-willingham',
    iconClassName: "[mask-image:url('/icons/goodreads.svg')] h-8 w-8",
  },
  {
    label: 'X',
    href: 'https://x.com/mmwillingham',
    iconClassName: "[mask-image:url('/icons/x.svg')] h-8 w-8",
  },
]

export function Footer(): React.JSX.Element {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950 py-10 text-zinc-100">
      <Container>
        <div className="flex flex-col items-center justify-between gap-8 text-center sm:flex-row sm:text-left">
          <div>
            <p className="font-heading text-3xl tracking-[0.18em]">
              MARTIN WILLINGHAM
            </p>

            <p className="mt-2 font-body text-sm text-zinc-400">
              © {currentYear} Martin Willingham. All rights reserved.
            </p>
          </div>

          <nav aria-label="Social links">
            <ul className="flex items-center gap-6">
              {socialLinks.map(({ label, href, iconClassName }) => (
                <li
                  key={href}
                  className="flex h-12 w-12 items-center justify-center"
                >
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    title={label}
                    className="flex h-12 w-12 items-center justify-center text-zinc-100 transition-colors duration-300 hover:text-[#A95633]"
                  >
                    <span
                      aria-hidden="true"
                      className={`block bg-current [mask-position:center] [mask-repeat:no-repeat] [mask-size:contain] ${iconClassName}`}
                    />
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Container>
    </footer>
  )
}
