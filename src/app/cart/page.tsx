"use client"

import { useCart } from "@/contexts/CartContext"
import Image from "next/image"
import { Product } from "@/lib/types"
import { products } from "@/lib/products"

export default function Cart() {
  const { cartItems, removeFromCart, clearCart } = useCart()

  const getProductById = (id: number): Product | undefined => {
    return products.find((product) => product.id === id)
  }

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      const product = getProductById(item.id)
      return total + (product ? product.price * item.quantity : 0)
    }, 0)
  }

  const handleCheckout = () => {
    alert("Proceeding to checkout...")
  }

  if (cartItems.length === 0) {
    return (
      <main className="max-w-3xl mx-auto px-4 py-10 mt-20">
        <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
        <p className="text-gray-500">Your cart is empty.</p>
      </main>
    )
  }

  return (
    <main className="max-w-3xl mx-auto px-4 py-10 mt-20">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>

      <div>
        {cartItems.map((item) => {
          const product = getProductById(item.id)
          if (!product) return null

          return (
            <div key={item.id} className="flex items-center gap-4 p-4">
              <button
                onClick={() => removeFromCart(item.id)}
                className="px-2 py-1 text-xs font-medium text-red-500 hover:text-red-700 rounded transition-colors duration-200 cursor-pointer"
              >
                ✕
              </button>
              <div className="w-14 h-14 relative">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>

              <div className="flex-1">
                <h2 className="font-medium">{product.name}</h2>
                <p className="text-gray-600 text-sm">${product.price}</p>
              </div>

              <div className="flex items-center gap-4">
                <div className="text-right">
                  <span className="text-sm text-gray-700">Qty:</span>
                  <p className="text-sm font-medium">{item.quantity}</p>
                </div>
              </div>
            </div>
          )
        })}

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
            onClick={clearCart}
            className="border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-100 transition-colors"
          >
            Clear Cart
          </button>
        </div>
      </div>
    </main>
  )
}
