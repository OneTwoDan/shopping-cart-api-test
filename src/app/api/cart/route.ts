import { NextRequest, NextResponse } from "next/server"
import { addToCart, getCart } from "@/lib/cart"

export async function GET() {
  const cart = getCart()
  return NextResponse.json(cart)
}

export async function POST(request: NextRequest) {
  const body = await request.json()
  const { productId } = body

  if (!productId) {
    return NextResponse.json({ error: "Missing productId" }, { status: 400 })
  }

  addToCart(productId)
  return NextResponse.json({ message: "Product added to cart" })
}
