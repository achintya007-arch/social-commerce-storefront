/*"use client"

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
    // ✅ Copy message first
    try {
      await navigator.clipboard.writeText(message)
      alert("Message copied. Paste it in Instagram DM ✨")
    } catch {
      // silent fail
    }

    const igAppLink = `instagram://user?username=${STORE.instagramUsername}`
    const igWebLink = `https://instagram.com/${STORE.instagramUsername}`

    // ✅ Try opening app
    window.location.href = igAppLink

    // ✅ Fallback to web after 1s
    setTimeout(() => {
      window.location.href = igWebLink
    }, 1000)
  }

  return (
    <button
      onClick={handleClick}
      className="inline-flex w-full items-center justify-center rounded-full bg-stone-100 px-6 py-2 text-xs font-medium tracking-[0.25em] text-black uppercase hover:bg-stone-200 transition"
    >
      Buy via Instagram DM
    </button>
  )
}*/
"use client"

interface BuyViaDMButtonProps {
  product: {
    name: string
    size: string
    price: number
  }
}

const INSTAGRAM_USERNAME = "__.achintya._"

export default function BuyViaDMButton({ product }: BuyViaDMButtonProps) {
  const message = `Hi! I want to buy:\n${product.name}\nSize: ${product.size}\nPrice: ₹${product.price}`

  const handleClick = async () => {
    // Copy message
    try {
      await navigator.clipboard.writeText(message)
      alert("Message copied. Paste it in Instagram DM ✨")
    } catch {
      // silent fail
    }

    const igAppLink = `instagram://user?username=${INSTAGRAM_USERNAME}`
    const igWebLink = `https://instagram.com/${INSTAGRAM_USERNAME}`

    // Try opening Instagram app
    window.location.href = igAppLink

    // Fallback to web after 1s
    setTimeout(() => {
      window.location.href = igWebLink
    }, 1000)
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
