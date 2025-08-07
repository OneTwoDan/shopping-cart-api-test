"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const baseLinkClass =
    "relative text-neutral-900 text-sm font-medium transition-colors duration-200"
  const hoverUnderlineClass =
    "after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:w-0 after:h-[2px] after:bg-gray-600 after:transition-all after:duration-300 hover:after:w-full"

  const navLinks = [
    { href: "/", label: "Products" },
    { href: "/cart", label: "Cart" },
    { href: "/budget", label: "Budget" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <nav className="p-4 border-b border-gray-300">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Image
            src="/icons/logo.svg"
            alt="ShopOnline Logo"
            width={16}
            height={16}
          />
          <p className="text-neutral-900 text-lg font-bold">ShopOnline</p>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="sm:hidden p-2 text-neutral-900"
          aria-label="Toggle Menu"
        >
          ☰
        </button>

        <ul className="hidden sm:flex gap-6 items-center">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`${baseLinkClass} ${hoverUnderlineClass}`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {isOpen && (
        <ul className="flex flex-col sm:hidden mt-4 gap-4">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`${baseLinkClass} ${hoverUnderlineClass} block`}
                onClick={() => setIsOpen(false)}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}
