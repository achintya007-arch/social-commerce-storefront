"use client"

import { STORE } from "@/lib/store"

interface BuyViaDMButtonProps {
  product: {
    id: string
    name: string
    size: string
    price: number
  }
}

export default function BuyViaDMButton({ product }: BuyViaDMButtonProps) {
  const message = `Hi! I want to buy:
${product.name}
Size: ${product.size}
Price: ₹${product.price}`

  const dmLink = `https://ig.me/m/${STORE.instagramUsername}?text=${encodeURIComponent(
    message
  )}`

  // Always go directly to DM with pre-filled message
  const href = dmLink

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex w-full items-center justify-center rounded-full bg-stone-100 px-6 py-2 text-xs font-medium tracking-[0.25em] text-black uppercase hover:bg-stone-200 transition"
    >
      Buy via Instagram DM
    </a>
  )
}
