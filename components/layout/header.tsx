"use client"

import Link from "next/link"
import { useState, useEffect } from "react"

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Drops", href: "/drops" },
  { label: "How to Order", href: "/how-to-order" },
  { label: "About", href: "/about" },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    handleScroll() // set initial state
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const headerClasses =
  "fixed top-0 z-50 w-full backdrop-blur border-b transition-colors duration-300 shadow-[0_4px_30px_rgba(0,0,0,0.25)] " +
  (scrolled
    ? "bg-[#231c17]/40 border-transparent"
    : "bg-[#231c17]/95 border-[#3a2f28]")

  return (
    <header className={headerClasses}>
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        {/* Logo */}
        <Link
          href="/"
          className="font-serif text-2xl md:text-3xl tracking-[0.14em] text-[#f5ede4] hover:text-[#e6cfc2] transition-colors"
        >
          Vintage Winn
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative text-base font-medium tracking-[0.22em] uppercase text-[#cbb8aa] hover:text-[#f5ede4] transition-colors
                after:absolute after:left-0 after:-bottom-1
                after:h-[1px] after:w-0 after:bg-[#c9a09b]
                after:transition-all after:duration-300
                hover:after:w-full"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-[#f5ede4]"
          onClick={() => setIsOpen((open) => !open)}
          aria-label="Toggle navigation"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden border-t border-[#3a2f28] bg-[#1a1512]">
          <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="relative text-sm font-medium tracking-[0.25em] uppercase text-[#cbb8aa] hover:text-[#f5ede4] transition-colors
                  after:absolute after:left-0 after:-bottom-1
                  after:h-[1px] after:w-0 after:bg-[#c9a09b]
                  after:transition-all after:duration-300
                  hover:after:w-full"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
