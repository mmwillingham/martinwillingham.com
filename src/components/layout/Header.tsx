'use client'

import { Container } from '@/components/layout/Container'
import * as Dialog from '@radix-ui/react-dialog'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

type NavigationSection = 'Home' | 'About' | 'Excerpts' | 'Contact'

interface NavigationItem {
  label: string
  href: string
  value: NavigationSection
}

const navigationItems: NavigationItem[] = [
  { label: 'Home', href: '/#home', value: 'Home' },
  { label: 'About', href: '/#about', value: 'About' },
  { label: 'Excerpts', href: '/#excerpts', value: 'Excerpts' },
  { label: 'Contact', href: '/#contact', value: 'Contact' },
]

// Helper function to cleanly match lowercase URL hashes to our Capitalized values
const getSectionFromHash = (hash: string): NavigationSection | null => {
  const match = navigationItems.find(
    (item) => item.value.toLowerCase() === hash.toLowerCase()
  )
  return match ? match.value : null
}

export function Header(): React.JSX.Element {
  const pathname = usePathname()
  const [activeSection, setActiveSection] =
    useState<NavigationSection>('Home')

  // The fixed useEffect hook is safely tucked inside the component body here
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
        <div className="flex h-20 items-center justify-between">
          <Link
            href="/#home"
            className="font-heading text-3xl tracking-[0.18em] text-zinc-950 transition-colors hover:text-[#A95633]"
            onClick={() => setActiveSection('Home')}
          >
            MARTIN WILLINGHAM
          </Link>

          <nav
            className="hidden items-center gap-10 md:flex"
            aria-label="Main navigation"
          >
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={activeSection === item.value ? 'page' : undefined}
                className={`text-sm font-medium uppercase tracking-[0.2em] transition-colors hover:text-[#A95633] ${
                  activeSection === item.value
                    ? 'text-[#A95633]'
                    : 'text-zinc-950'
                }`}
                onClick={() => setActiveSection(item.value)}
              >
                {item.label}
              </Link>
            ))}
          </nav>

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
                      aria-label="Fechar menu de navegação"
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
                          activeSection === item.value ? 'page' : undefined
                        }
                        className={`text-lg font-medium uppercase tracking-[0.2em] transition-colors hover:text-[#A95633] ${
                          activeSection === item.value
                            ? 'text-[#A95633]'
                            : 'text-zinc-950'
                        }`}
                        onClick={() => setActiveSection(item.value)}
                      >
                        {item.label}
                      </Link>
                    </Dialog.Close>
                  ))}
                </nav>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      </Container>
    </header>
  )
}