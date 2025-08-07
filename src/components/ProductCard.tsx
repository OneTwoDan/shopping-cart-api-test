"use client"

import Image from "next/image"
import { Product } from "@/lib/types"

interface ProductCardProps {
  product: Product
  onAddToCart: (id: number) => void
}

export default function ProductCard({
  product,
  onAddToCart,
}: ProductCardProps) {
  return (
    <div className="flex flex-col gap-1 p-4 w-full max-w-xs">
      <Image
        src={product.image}
        alt={product.name}
        width={300}
        height={300}
        className="rounded-lg mb-4"
      />
      <div>
        <h3 className="text-neutral-900 font-semibold mb-2">{product.name}</h3>
        <p className="text-sm text-slate-500 mb-4">${product.price}</p>
      </div>
      <button
        onClick={() => onAddToCart(product.id)}
        className="w-full border border-neutral-300 text-neutral-800 text-sm font-medium py-2 rounded-md hover:bg-neutral-100 transition-colors"
      >
        Add to Cart
      </button>
    </div>
  )
}
