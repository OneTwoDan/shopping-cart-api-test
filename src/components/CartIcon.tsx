"use client"

import Link from "next/link"
import Image from "next/image"
import { useCart } from "@/contexts/CartContext"

export default function CartIcon() {
  const { getCartItemsCount } = useCart()
  const itemCount = getCartItemsCount()

  return (
    <Link href="/cart" className="relative inline-flex items-center">
      <Image
        src="/icons/cart.svg"
        alt="Cart"
        width={24}
        height={24}
        className="text-neutral-900"
      />

      {itemCount > 0 && (
        <span className="absolute -top-2 -right-3 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-red-600 rounded-full min-w-[1.25rem] h-5">
          {itemCount}
        </span>
      )}
    </Link>
  )
}
