"use client"

import { useEffect, useState } from "react"
import { Product } from "@/lib/types"
import ProductCard from "@/components/ProductCard"

export default function Home() {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/api/products")
        const data = await res.json()
        setProducts(data)
      } catch (error) {
        console.error("Failed to fetch products:", error)
      }
    }

    fetchProducts()
  }, [])

  return (
    <main className="max-w-7xl mx-auto px-6 py-10">
      <h1 className="text-2xl font-bold mb-6">Our Products</h1>
      <div className="flex flex-wrap gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  )
}
