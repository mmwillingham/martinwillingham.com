import Link from 'next/link'

export const metadata = {
  title: 'Page Not Found | Martin Willingham',
  robots: {
    index: false,
    follow: false,
  },
}

export default function NotFound(): React.JSX.Element {
  return (
    <main className="flex min-h-screen items-center justify-center bg-zinc-100 px-6 py-24 text-zinc-950">
      <div className="w-full max-w-2xl text-center">
        <p className="font-body text-sm font-semibold uppercase tracking-[0.3em] text-[#A95633]">
          404
        </p>

        <h1 className="mt-5 font-heading text-6xl leading-none tracking-[0.04em] sm:text-7xl">
          PAGE NOT FOUND
        </h1>

        <div className="mx-auto mt-8 max-w-xl space-y-4 font-body text-xl leading-9 text-zinc-700">
          <p>Some paths lead nowhere.</p>
          <p>This was one of them.</p>
          <p>But there are still stories waiting for you.</p>
        </div>

        <Link
          href="/#home"
          className="mt-10 inline-flex h-12 items-center justify-center border border-zinc-950 bg-zinc-950 px-8 font-body text-base text-white transition-colors hover:border-[#A95633] hover:bg-[#A95633]"
        >
          Back to home
        </Link>
      </div>
    </main>
  )
}
