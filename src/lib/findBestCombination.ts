import { Product } from "./types"

export function findBestCombination(
  products: Product[],
  budget: number
): Product[] {
  const n = products.length
  let best: Product[] = []
  let bestTotal = 0

  function backtrack(
    index: number,
    currentCombo: Product[],
    currentTotal: number
  ): void {
    if (index === n) {
      if (currentTotal <= budget && currentTotal > bestTotal) {
        bestTotal = currentTotal
        best = [...currentCombo]
      }
      return
    }

    backtrack(index + 1, currentCombo, currentTotal)

    const price = products[index].price
    if (currentTotal + price <= budget) {
      currentCombo.push(products[index])
      backtrack(index + 1, currentCombo, currentTotal + price)
      currentCombo.pop()
    }
  }

  backtrack(0, [], 0)
  return best
}
