"use client"

import { STORE } from "@/lib/store"

interface BuyViaDMButtonProps {
  product: {
    name: string
    size: string
    price: number
  }
}

export default function BuyViaDMButton({ product }: BuyViaDMButtonProps) {
  const message = `Hi! I want to buy:\n${product.name}\nSize: ${product.size}\nPrice: ₹${product.price}`

  const handleClick = async () => {
    try {
      await navigator.clipboard.writeText(message)
      alert("Message copied. Paste it in Instagram DM ✨")
    } catch {
      alert("Copy failed. Please type message manually.")
    }

    window.open(
      `https://ig.me/m/${STORE.instagramUsername}`,
      "_blank"
    )
  }

  return (
    <button
      onClick={handleClick}
      className="inline-flex w-full items-center justify-center rounded-full bg-stone-100 px-6 py-2 text-xs font-medium tracking-[0.25em] text-black uppercase hover:bg-stone-200 transition"
    >
      Buy via Instagram DM
    </button>
  )
}
