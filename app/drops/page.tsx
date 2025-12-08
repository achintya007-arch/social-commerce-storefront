"use client"

import { ProductCard } from "@/components/drops/product-card"
import { PRODUCTS } from "@/lib/products"

export default function Page() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-stone-800 px-6 pt-40 pb-20 sm:px-8">

        <div className="mx-auto max-w-6xl">
          <h1 className="text-5xl sm:text-6xl font-light tracking-tight">
            Drops
          </h1>
          <p className="mt-6 max-w-2xl text-base text-stone-400">

            Curated collections released exclusively on Instagram
          </p>
        </div>
      </header>

      {/* Drops Sections */}
      <main className="mx-auto max-w-6xl px-6 py-12 sm:px-8">
        <section className="mb-20">
          <h2 className="mb-10 text-3xl font-light tracking-wide text-stone-200">
            Available – Current Drop
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PRODUCTS.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </main>

      <div className="h-12" />
    </div>
  )
}
