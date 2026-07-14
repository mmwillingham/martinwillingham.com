'use client'

import { Container } from '@/components/layout/Container'
import * as Dialog from '@radix-ui/react-dialog'
import Link from 'next/link'
import type { UrlObject } from 'url'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

type NavigationSection = 'Home' | 'About' | 'Books' | 'Excerpts' | 'Contact'

interface NavigationItem {
  label: string
  href: string | UrlObject
  value: NavigationSection
}

const createSectionHref = (hash: string): UrlObject => ({
  pathname: '/',
  hash,
})

const navigationItems: NavigationItem[] = [
  { label: 'Home', href: createSectionHref('home'), value: 'Home' },
  { label: 'About', href: createSectionHref('about'), value: 'About' },
  { label: 'Books', href: '/books', value: 'Books' },
  { label: 'Excerpts', href: createSectionHref('excerpts'), value: 'Excerpts' },
  { label: 'Contact', href: createSectionHref('contact'), value: 'Contact' },
]

const publisherHref = '/publisher'

const getSectionFromHash = (hash: string): NavigationSection | null => {
  const match = navigationItems.find(
    (item) => item.value.toLowerCase() === hash.toLowerCase()
  )
  return match ? match.value : null
}

const linkClassName = (isActive: boolean): string =>
  `text-sm font-medium uppercase tracking-[0.2em] transition-colors hover:text-[#A95633] ${
    isActive ? 'text-[#A95633]' : 'text-zinc-950'
  }`

const mobileLinkClassName = (isActive: boolean): string =>
  `text-lg font-medium uppercase tracking-[0.2em] transition-colors hover:text-[#A95633] ${
    isActive ? 'text-[#A95633]' : 'text-zinc-950'
  }`

export function Header(): React.JSX.Element {
  const pathname = usePathname()
  const [activeSection, setActiveSection] =
    useState<NavigationSection>('Home')
  const isPublisherPage = pathname.startsWith(publisherHref)

  useEffect(() => {
    const updateActiveSection = (): void => {
      const hash = window.location.hash.replace('#', '')
      const matchedSection = getSectionFromHash(hash)

      if (matchedSection) {
        setActiveSection(matchedSection)
        return
      }

      if (pathname === '/') {
        setActiveSection('Home')
        return
      }

      if (pathname.startsWith('/books')) {
        setActiveSection('Books')
      }
    }

    updateActiveSection()

    window.addEventListener('hashchange', updateActiveSection)

    return () => {
      window.removeEventListener('hashchange', updateActiveSection)
    }
  }, [pathname])

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-zinc-200 bg-white">
      <Container>
        <div className="flex h-20 items-center justify-between gap-6">
          <Link
            href={createSectionHref('home')}
            className="shrink-0 font-heading text-3xl tracking-[0.18em] text-zinc-950 transition-colors hover:text-[#A95633]"
            onClick={() => setActiveSection('Home')}
          >
            MARTIN WILLINGHAM
          </Link>

          <div className="hidden items-center gap-10 md:flex">
            <nav
              className="flex items-center gap-10"
              aria-label="Main navigation"
            >
              {navigationItems.map((item) => (
                <Link
                  key={item.value}
                  href={item.href}
                  aria-current={
                    !isPublisherPage && activeSection === item.value
                      ? 'page'
                      : undefined
                  }
                  className={linkClassName(
                    !isPublisherPage && activeSection === item.value
                  )}
                  onClick={() => setActiveSection(item.value)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <Link
              href={publisherHref}
              aria-current={isPublisherPage ? 'page' : undefined}
              className={linkClassName(isPublisherPage)}
            >
              My Publisher
            </Link>
          </div>

          <Dialog.Root>
            <Dialog.Trigger asChild>
              <button
                type="button"
                className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 md:hidden"
                aria-label="Open navigation menu"
              >
                <span className="h-0.5 w-6 bg-zinc-950" />
                <span className="h-0.5 w-6 bg-zinc-950" />
                <span className="h-0.5 w-6 bg-zinc-950" />
              </button>
            </Dialog.Trigger>

            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 z-50 bg-black/40" />

              <Dialog.Content className="fixed top-0 right-0 z-50 flex h-full w-80 max-w-[85vw] flex-col bg-white px-8 py-8 shadow-xl">
                <div className="flex items-center justify-between">
                  <Dialog.Title className="font-heading text-2xl tracking-[0.18em] text-zinc-950">
                    MENU
                  </Dialog.Title>

                  <Dialog.Close asChild>
                    <button
                      type="button"
                      className="flex h-11 w-11 items-center justify-center text-3xl leading-none text-zinc-950"
                      aria-label="Close navigation menu"
                    >
                      ×
                    </button>
                  </Dialog.Close>
                </div>

                <nav
                  className="mt-12 flex flex-col gap-8"
                  aria-label="Mobile menu"
                >
                  {navigationItems.map((item) => (
                    <Dialog.Close asChild key={item.href}>
                      <Link
                        href={item.href}
                        aria-current={
                          !isPublisherPage && activeSection === item.value
                            ? 'page'
                            : undefined
                        }
                        className={mobileLinkClassName(
                          !isPublisherPage && activeSection === item.value
                        )}
                        onClick={() => setActiveSection(item.value)}
                      >
                        {item.label}
                      </Link>
                    </Dialog.Close>
                  ))}

                  <Dialog.Close asChild>
                    <Link
                      href={publisherHref}
                      aria-current={isPublisherPage ? 'page' : undefined}
                      className={mobileLinkClassName(isPublisherPage)}
                    >
                      My Publisher
                    </Link>
                  </Dialog.Close>
                </nav>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      </Container>
    </header>
  )
}
