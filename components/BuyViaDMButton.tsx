"use client"

import { STORE } from "@/lib/store"

interface BuyViaDMButtonProps {
  product: {
    id: string | number
    name: string
    size: string
    price: number
  }
}

export default function BuyViaDMButton({ product }: BuyViaDMButtonProps) {
  const message = `Hi! I want to buy:
${product.name}
Size: ${product.size}
Price: ₹${product.price}
Item ID: ${product.id}`

  const dmLink = `https://ig.me/m/${STORE.instagramUsername}?text=${encodeURIComponent(
    message
  )}`

  return (
    <a
      href={dmLink}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex w-full items-center justify-center rounded-full bg-stone-100 px-6 py-2 text-xs font-medium tracking-[0.25em] text-black uppercase hover:bg-stone-200 transition"
    >
      Buy via Instagram DM
    </a>
  )
}
