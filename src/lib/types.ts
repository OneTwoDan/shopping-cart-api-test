export interface Product {
  id: number
  name: string
  price: number
  image: string
}

export type CartItem = {
  product: Product
  quantity: number
}
