import Link from "next/link"

export default function Page() {
  return (
    <main className="pt-32 pb-20">
      {/* Hero */}
      <section className="mx-auto max-w-5xl px-6">
        <p className="text-xs tracking-[0.3em] text-stone-500 uppercase">
          Curated vintage · One-of-one pieces
        </p>

        <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-stone-100">
          Dress like the main character.
        </h1>

        <p className="mt-5 max-w-xl text-sm sm:text-base leading-relaxed text-stone-400">
          Vintage Winn releases small, carefully curated drops inspired by gothic romance,
          old-world cinema and slow fashion. Once a piece is claimed via DM, it&apos;s gone.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/drops"
            className="inline-flex items-center justify-center rounded-full bg-stone-100 px-6 py-2 text-xs font-medium tracking-[0.25em] text-black uppercase hover:bg-stone-200 transition"
          >
            Browse current drop
          </Link>

          <Link
            href="/how-to-order"
            className="inline-flex items-center justify-center rounded-full border border-stone-600 px-6 py-2 text-xs font-medium tracking-[0.25em] text-stone-300 uppercase hover:border-stone-300 hover:text-stone-100 transition"
          >
            How to order
          </Link>
        </div>
      </section>

      {/* Why Vintage Winn */}
      <section className="mx-auto mt-16 max-w-5xl px-6">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h2 className="text-sm font-semibold tracking-[0.2em] text-stone-400 uppercase">
              One of one
            </h2>
            <p className="mt-3 text-sm text-stone-400">
              Every piece is sourced in tiny quantities. No mass drops, no restocks – just
              singular finds.
            </p>
          </div>

          <div>
            <h2 className="text-sm font-semibold tracking-[0.2em] text-stone-400 uppercase">
              DM to claim
            </h2>
            <p className="mt-3 text-sm text-stone-400">
              See something you love? Claim it in a single Instagram DM. No accounts,
              no checkout forms.
            </p>
          </div>

          <div>
            <h2 className="text-sm font-semibold tracking-[0.2em] text-stone-400 uppercase">
              Pan-India shipping
            </h2>
            <p className="mt-3 text-sm text-stone-400">
              Ships across India with care instructions included so your pieces last for
              many wears and many stories.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
