"use client"

import * as React from "react"
import { STORE } from "@/lib/store"

interface BuyViaDMButtonProps {
  product: {
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

  // 1) Open DM compose screen with the store’s username
  const dmLink = `https://www.instagram.com/direct/new/?username=${STORE.instagramUsername}`

  const handleClick = async (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    // 2) Try to copy the prefilled message so user can paste it in DM
    try {
      if (navigator && navigator.clipboard) {
        await navigator.clipboard.writeText(message)
        console.log("Message copied to clipboard")
      }
    } catch (err) {
      console.error("Failed to copy message to clipboard", err)
      // not critical – link will still open
    }
  }

  return (
    <a
      href={dmLink}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="inline-flex w-full items-center justify-center rounded-full bg-stone-100 px-6 py-2 text-xs font-medium tracking-[0.25em] text-black uppercase hover:bg-stone-200 transition"
    >
      Buy via Instagram DM
    </a>
  )
}
