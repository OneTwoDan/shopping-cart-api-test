"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { CartItem, Product } from "@/lib/types"
import { groupCartItems } from "@/lib/cart"

export default function Cart() {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const res = await fetch("/api/cart")
        const rawItems: Product[] = await res.json()

        setCartItems(groupCartItems(rawItems))
      } catch (error) {
        console.error("Failed to fetch cart:", error)
      }
    }

    fetchCart()
  }, [])

  const handleClearCart = async () => {
    try {
      await fetch("/api/cart", {
        method: "DELETE",
      })
      setCartItems([])
    } catch (error) {
      console.error("Failed to clear cart:", error)
    }
  }

  const handleCheckout = () => {
    alert("Proceeding to checkout...")
  }

  const calculateTotal = () => {
    return cartItems.reduce(
      (acc, item) => acc + item.product.price * item.quantity,
      0
    )
  }

  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.product.id} className="flex items-center gap-4 p-4">
              <div className="w-14 h-14 relative">
                <Image
                  src={item.product.image}
                  alt={item.product.name}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>

              <div className="flex-1">
                <h2 className="font-medium">{item.product.name}</h2>
                <p className="text-gray-600 text-sm">${item.product.price}</p>
              </div>

              <div className="text-right">
                <span className="text-sm text-gray-700">Qty:</span>
                <p className="text-sm font-medium">{item.quantity}</p>
              </div>
            </div>
          ))}

          <div className="flex justify-between items-center text-lg font-bold mt-6">
            <span>Total:</span>
            <span>${calculateTotal().toFixed(2)}</span>
          </div>

          <div className="flex flex-col gap-3 mt-6">
            <button
              onClick={handleCheckout}
              className="bg-black text-white px-5 py-2.5 rounded-md hover:bg-gray-800 transition-colors"
            >
              Checkout
            </button>

            <button
              onClick={handleClearCart}
              className="border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-100 transition-colors"
            >
              Clear Cart
            </button>
          </div>
        </div>
      )}
    </main>
  )
}
