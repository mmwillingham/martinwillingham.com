import { Container } from '@/components/layout/Container'
import Image from 'next/image'
import Link from 'next/link'

export function About(): React.JSX.Element {
  return (
    <section
      id="about"
      className="scroll-mt-20 bg-zinc-100 py-32 text-zinc-950"
    >
      <Container>
        <div className="grid grid-cols-1 items-stretch gap-14 lg:grid-cols-[minmax(0,5.6fr)_minmax(0,4.4fr)] lg:gap-16">
          <div className="relative min-h-[440px] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.18)] lg:min-h-[640px]">
            <Image
              src="/images/cabral-correia.png" // We can update this path later when you add your own photo or graphic
              alt="Martin M. Willingham, author of Matecumbe Island"
              fill
              sizes="(max-width: 1024px) 100vw, 56vw"
              className="object-cover grayscale"
            />
          </div>

          <div className="flex min-w-0 flex-col justify-center">
            <p className="mb-5 font-body text-sm font-semibold uppercase tracking-[0.3em] text-[#A95633]">
              About the Author
            </p>

            <h2 className="font-heading text-5xl leading-none tracking-[0.04em] text-zinc-950 sm:text-6xl">
              MARTIN M. WILLINGHAM
            </h2>

            <div className="mt-8 space-y-6 font-body text-lg leading-8 text-zinc-800">
              <p>
                Based in Macon, Georgia, Martin M. Willingham is an independent fiction writer whose stories blend coastal adventure, rich romance, and sharp Southern humor. He is the author of the upcoming novels{' '}
                <Link
                  href="/excerpts"
                  className="text-zinc-950 underline decoration-[#A95633] underline-offset-4 transition-colors hover:text-[#A95633]"
                >
                  Matecumbe Island
                </Link>{' '}
                and <em>Diving for Black Coral</em>.
              </p>

              <p>
                Drawing on a lifetime of navigating both complex technical architectures during a thirty-eight year career in IT and the vast, sun-drenched waterways of the coast, his writing captures the high-stakes thrills of deep-water escapades alongside the genuine human connections and laughter that ground them.
              </p>

              <p>
                Whether exploring hidden sub-tropical keys or tracking the humorous, unpredictable rhythm of contemporary Southern life, Martin crafts fast-paced narratives where relationships matter just as much as the destination.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}