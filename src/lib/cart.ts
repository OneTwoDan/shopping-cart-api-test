import { products } from "./products"
import { Product } from "./types"

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
