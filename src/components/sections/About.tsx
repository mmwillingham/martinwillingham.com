import { Container } from '@/components/layout/Container'
import Image from 'next/image'
import Link from 'next/link'

export function About(): React.JSX.Element {
  return (
    <section
      id="sobre"
      className="scroll-mt-20 bg-zinc-100 py-32 text-zinc-950"
    >
      <Container>
        <div className="grid grid-cols-1 items-stretch gap-14 lg:grid-cols-[minmax(0,5.6fr)_minmax(0,4.4fr)] lg:gap-16">
          <div className="relative min-h-[440px] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.18)] lg:min-h-[640px]">
            <Image
              src="/images/cabral-correia.png"
              alt="Cabral Correia, autor de Carne e Osso"
              fill
              sizes="(max-width: 1024px) 100vw, 56vw"
              className="object-cover grayscale"
            />
          </div>

          <div className="flex min-w-0 flex-col justify-center">
            <p className="mb-5 font-body text-sm font-semibold uppercase tracking-[0.3em] text-[#A95633]">
              Sobre o autor
            </p>

            <h2 className="font-heading text-5xl leading-none tracking-[0.04em] text-zinc-950 sm:text-6xl">
              CABRAL CORREIA
            </h2>

            <div className="mt-8 space-y-6 font-body text-lg leading-8 text-zinc-800">
              <p>
                Nascido em Fortaleza, Ceará, é autor de{' '}
                <Link
                  href="/livro"
                  className="text-zinc-950 underline decoration-[#A95633] underline-offset-4 transition-colors hover:text-[#A95633]"
                >
                  Carne e Osso
                </Link>
                , coletânea de contos ambientada em uma Fortaleza ficcional e em
                cidades inspiradas no interior cearense.
              </p>

              <p>
                Escreve histórias sobre personagens comuns, conflitos humanos e
                dilemas cotidianos, com olhar voltado para os absurdos da
                existência e para as contradições de uma realidade muitas vezes
                dura.
              </p>

              <p>
                Ao longo de 22 anos, reuniu os contos que deram origem à
                coletânea. Seus textos já foram publicados em edições do Prêmio
                Estadual Ideal Clube de Literatura e em revistas literárias.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
