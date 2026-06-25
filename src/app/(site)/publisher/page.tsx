import { Container } from '@/components/layout/Container'
import { Button } from '@/components/ui/Button'
import type { Metadata } from 'next'

const publisherUrl = 'https://waverlyparkpress.com'

export const metadata: Metadata = {
  title: 'My Publisher',
  description:
    'Waverly Park Press publishes the novels and nonfiction of Martin Willingham.',
  openGraph: {
    title: 'Waverly Park Press — Martin Willingham',
    description:
      'Waverly Park Press publishes the novels and nonfiction of Martin Willingham.',
    type: 'website',
  },
}

export default function PublisherPage(): React.JSX.Element {
  return (
    <main id="main-content" className="flex-1 bg-zinc-100 pt-20 text-zinc-950">
      <section className="py-14 sm:py-20 lg:py-24">
        <Container>
          <div className="mx-auto max-w-3xl">
            <p className="mb-5 font-body text-sm font-semibold uppercase tracking-[0.3em] text-[#A95633]">
              My Publisher
            </p>

            <h1 className="font-heading text-6xl leading-none tracking-[0.04em] text-zinc-950 sm:text-7xl lg:text-8xl">
              WAVERLY PARK PRESS
            </h1>

            <div className="mt-8 space-y-6 font-body text-lg leading-8 text-zinc-800">
              <p>
                Martin Willingham&apos;s books are published by{' '}
                <strong>Waverly Park Press</strong>, an independent publisher
                dedicated to bringing distinctive Southern fiction and
                nonfiction to readers.
              </p>

              <p>
                From the Black Coral series to standalone novels and memoir,
                Waverly Park Press handles production, distribution,
                editorial support, and author website creation for Martin&apos;s work.
              </p>

              <p>
                Visit the Waverly Park Press website to learn more about the
                press, its catalog, and how to order books directly.
              </p>
            </div>

            <div className="mt-10">
              <Button href={publisherUrl} external tone="light">
                Visit waverlyparkpress.com
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </main>
  )
}
