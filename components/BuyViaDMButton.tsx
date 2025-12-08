"use client"

import { useState } from "react"

interface Product {
  id: string
  name: string
  size: string
  price: number
}

export default function BuyViaDMButton({ product }: { product: Product }) {
  const [copied, setCopied] = useState(false)

  const handleClick = async () => {
    if (copied) return

    const message = `Hi Vintage Winn ✨

I'm interested in buying:

🖤 Item: ${product.name}
📏 Size: ${product.size}
💰 Price: ₹${product.price}
🆔 Product ID: ${product.id}

Is this still available?`

    try {
      await navigator.clipboard.writeText(message)
      setCopied(true)
    } catch {
      // silently fail; still continue to Instagram
    }

    const profileUrl = "https://www.instagram.com/vinta.gewin/"
    const appUrl = "instagram://user?username=vinta.gewin"

    const isMobile = /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent)

    if (isMobile) {
      window.location.href = appUrl
      setTimeout(() => {
        window.location.href = profileUrl
      }, 800)
    } else {
      window.open(profileUrl, "_blank")
    }

    setTimeout(() => {
      setCopied(false)
    }, 2000)
  }

  return (
    <button
      onClick={handleClick}
      className={`mt-4 w-full rounded-md py-2 text-sm font-medium transition
        ${
          copied
            ? "bg-green-600 text-white cursor-default"
            : "bg-[#9e6b55] text-black hover:bg-[#b07a63]"
        }`}
    >
      {copied ? "Message copied ✓" : "Buy via Instagram DM"}
    </button>
  )
}
