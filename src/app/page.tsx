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

  const handleAddToCart = async (productId: number) => {
    try {
      await fetch("/api/cart", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId }),
      })
      alert("Product added to cart.")
    } catch (error) {
      console.error("Failed to add to cart:", error)
    }
  }

  return (
    <main className="max-w-7xl mx-auto px-6 py-10">
      <h1 className="text-2xl font-bold mb-6">Our Products</h1>
      <div className="flex flex-wrap gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </main>
  )
}
