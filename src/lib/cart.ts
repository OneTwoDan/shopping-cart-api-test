import { products } from "./products"
import { CartItem, Product } from "./types"

const cart: Product[] = []

export function addToCart(productId: number) {
  const product = products.find((p) => p.id === productId)
  if (product) {
    cart.push(product)
  }
}

export function getCart(): Product[] {
  return cart
}

export function groupCartItems(items: Product[]): CartItem[] {
  const grouped: Record<number, CartItem> = {}

  for (const item of items) {
    if (grouped[item.id]) {
      grouped[item.id].quantity += 1
    } else {
      grouped[item.id] = { product: item, quantity: 1 }
    }
  }

  return Object.values(grouped)
}

export function clearCart() {
  cart.length = 0
}
