"use client"

import type { Product } from "@/lib/products"
import BuyViaDMButton from "@/components/BuyViaDMButton"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const isAvailable = product.availability === "available"

  return (
    <article className="group flex flex-col">
      {/* Image */}
      <div className="relative mb-5 overflow-hidden bg-stone-900">
        <img
          src={product.image ?? "/placeholder.jpg"}
          alt={product.name}
          loading="lazy"
          className="aspect-[3/4] w-full object-cover transition-opacity duration-300 group-hover:opacity-90"
        />

        {/* Availability */}
        <div className="absolute right-3 top-3">
          {isAvailable ? (
            <span className="rounded-full bg-olive-600/90 px-3 py-1 text-xs font-medium uppercase tracking-widest text-white backdrop-blur">
              Available
            </span>
          ) : (
            <span className="rounded-full bg-[#3a3228]/90 px-3 py-1 text-xs font-medium uppercase tracking-widest text-stone-300 backdrop-blur">
              Sold
            </span>
          )}
        </div>
      </div>

      {/* Details */}
      <div className="flex flex-col">
        <h3 className="text-base font-medium tracking-wide text-white">
          {product.name}
        </h3>

        <div className="mt-2 flex items-baseline justify-between">
          <p className="text-sm text-stone-400">Size {product.size}</p>
          <p className="text-base font-medium text-stone-200">
            ₹{product.price}
          </p>
        </div>

        {/* CTA */}
        {isAvailable ? (
          <div className="mt-6">
            <BuyViaDMButton
              product={{
                id: product.id,
                name: product.name,
                size: product.size,
                price: product.price,
              }}
            />
          </div>
        ) : (
          <p className="mt-6 text-xs font-medium uppercase tracking-widest text-stone-500">
            Sold Out
          </p>
        )}
      </div>
    </article>
  )
}
