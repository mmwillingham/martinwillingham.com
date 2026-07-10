import { Container } from '@/components/layout/Container'
import Link from 'next/link'

export function About(): React.JSX.Element {
  return (
    <section
      id="about"
      className="scroll-mt-20 bg-zinc-100 py-32 text-zinc-950"
    >
      <Container>
        {/* Changed items-stretch to items-center to prevent layout warping */}
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[minmax(0,5.6fr)_minmax(0,4.4fr)] lg:gap-16">
          
          {/* 
            REMOVED: min-h-[440px] and lg:min-h-[640px] 
            Added a responsive max-width wrapper that lets the image define its own height naturally
          */}
          <div className="w-full max-w-[500px] mx-auto lg:max-w-none overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.18)]">
            {/* Using a standard img tag to bypass static export crop constraints */}
            <img
              src="/images/myfamily.jpg"
              alt="The Willingham family"
              className="h-auto w-full block"
            />
          </div>

          <div className="flex min-w-0 flex-col justify-center">
            <p className="mb-5 font-body text-sm font-semibold uppercase tracking-[0.3em] text-[#A95633]">
              About the Author
            </p>

            <h2 className="font-heading text-5xl leading-none tracking-[0.04em] text-zinc-950 sm:text-6xl">
              MARTIN WILLINGHAM
            </h2>

            <div className="mt-8 space-y-6 font-body text-lg leading-8 text-zinc-800">
              <p>
                Based in Macon, Georgia, where he lives with his wife, Martin
                Willingham writes stories that blend coastal and mountain
                adventure, rich romance, and sharp Southern humor. He is the
                author of the coming-of-age novel{' '}
                <Link
                  href="/books/blue-eyes-black-coral"
                  className="text-zinc-950 underline decoration-[#A95633] underline-offset-4 transition-colors hover:text-[#A95633]"
                >
                  <em>Blue Eyes Black Coral</em>
                </Link>
                , the Keys-based adventure{' '}
                <Link
                  href="/books/matecumbe-island"
                  className="text-zinc-950 underline decoration-[#A95633] underline-offset-4 transition-colors hover:text-[#A95633]"
                >
                  <em>Matecumbe Island</em>
                </Link>
                , and{' '}
                <Link
                  href="/books/alaska-south"
                  className="text-zinc-950 underline decoration-[#A95633] underline-offset-4 transition-colors hover:text-[#A95633]"
                >
                  <em>South to Alaska</em>
                </Link>
                , a non-fiction travel account.
              </p>

              <p>
                Before starting his thirty-eight year career in the tech
                industry, Martin roamed his personal frontier by bicycle and
                boat, unknowingly searching for himself. His perspective is
                shaped by this innate curiosity and a lifetime of
                discovery—from working on a Florida Keys scuba boat to
                long-distance touring and camping along rugged mountain routes.
              </p>

              <p>
                Now, he brings that depth of experience to the page. His writing
                captures the grit and improvisation of open-road travel, the
                chaos of getting entangled with eccentric characters or island
                con artists, and the genuine human connections, humor, and love
                that pull his characters through.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}