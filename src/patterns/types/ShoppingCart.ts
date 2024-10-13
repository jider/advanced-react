import {OnProductChange, Product} from './Product.ts'

export interface ShoppingCartProps {
  shoppingCart?: ShoppingCart
  onProductCountChange?: OnProductChange
}

// export type ShoppingCartProduct = Product & { count: number }
export interface ShoppingCartProduct extends Product {
  count: number
}

export interface ShoppingCart {
  [key: string]: ShoppingCartProduct
}
