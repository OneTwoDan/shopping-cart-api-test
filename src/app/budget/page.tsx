"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Product } from "@/lib/types"
import { findBestCombination } from "@/lib/findBestCombination"

export default function Budget() {
  const [products, setProducts] = useState<Product[]>([])
  const [budget, setBudget] = useState("")
  const [bestCombination, setBestCombination] = useState<Product[]>([])

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/api/products")
        const data: Product[] = await res.json()
        setProducts(data)
      } catch (error) {
        console.error("Failed to fetch products:", error)
      }
    }

    fetchProducts()
  }, [])

  const handleCalculate = () => {
    const budgetNumber = Number(budget)
    if (isNaN(budgetNumber) || budgetNumber <= 0) {
      alert("Please enter a valid positive budget")
      return
    }
    const result = findBestCombination(products, budgetNumber)
    setBestCombination(result)
  }

  const total = bestCombination.reduce((sum, p) => sum + p.price, 0)

  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Budget Optimizer</h1>

      <div className="flex items-center gap-4 mb-6">
        <input
          type="number"
          className="border border-gray-300 px-3 py-2 rounded w-40"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
          placeholder="Enter budget"
        />
        <button
          onClick={handleCalculate}
          className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition-colors"
        >
          Find Best Fit
        </button>
      </div>

      {bestCombination.length > 0 ? (
        <div>
          <h2 className="text-xl font-semibold mb-4">Selected Products</h2>
          <ul className="space-y-4">
            {bestCombination.map((product) => (
              <li
                key={product.id}
                className="flex items-center gap-4 border-b pb-4"
              >
                <div className="w-14 h-14 relative">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover rounded-md"
                  />
                </div>

                <div className="flex justify-between w-full">
                  <span className="font-medium">{product.name}</span>
                  <span>${product.price.toFixed(2)}</span>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-6 text-lg font-bold flex justify-between">
            <span>Total:</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>
      ) : (
        <p className="text-gray-500">
          No combination found or try another budget.
        </p>
      )}
    </main>
  )
}
